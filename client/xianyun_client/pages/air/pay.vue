<template>
  <div class="container">
    <div class="main">
      <div class="pay-title">
        支付总金额 <span class="pay-price">￥ {{ price }}</span>
      </div>
      <div class="pay-main">
        <h4>微信支付</h4>
        <el-row
          type="flex"
          justify="space-between"
          align="middle"
          class="pay-qrcode"
        >
          <div class="qrcode">
            <!-- 二维码 -->
            <canvas id="qrcode-stage" />

            <p>请使用微信扫一扫</p>
            <p>扫描二维码支付</p>
          </div>
          <div class="pay-example">
            <img src="http://157.122.54.189:9093/images/wx-sweep2.jpg" alt="">
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
// 引入二维码生成插件
import qrcode from 'qrcode'
export default {
  data () {
    return {
      // 返回的价格
      price: 0,

      // 定义的定期检查是否付款的定时器
      timer: null
    }
  },
  mounted () {
    // 加载订票的详细信息
    // 延迟100ms防止获取$state的值加载不出来
    setTimeout(async () => {
      const token = this.$store.state.user.userInfo.token
      const url = '/airorders/' + this.$route.query.id
      const res = await this.$axios({
        url,
        methods: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // 将机票价格保留两位小数
      this.price = res.data.price.toFixed(2)
      // 使用qrcode生成二维码
      const qr = res.config.baseURL
      const canvas = document.getElementById('qrcode-stage')
      qrcode.toCanvas(canvas, qr, {
        width: 200
      })

      // 进行是否付款判断,4秒调动一次
      this.timer = setInterval(() => {
        // 如果检查一直未付款将会一直调用定时器
        const isContinue = this.isPay()
        if (isContinue) {
          // 检查付款成功的情况
          this.$message.success('支付成功！')
          // 清除定时器
          clearInterval(this.timer)
        }
      }, 4000)
    }, 100)
  },
  // 离开支付页面销毁支付定时器
  destroyed () {
    // 清除支付定时器
    clearTimeout(this.timer)
  },
  methods: {
    // 检查是否付款的函数
    isPay () {
      console.log('付款成功')
      return true
    }
  }
}
</script>

<style scoped lang="less">
  .container{
    background:#f5f5f5;
    padding: 30px 0;
  .main{
    width:1000px;
    margin:0 auto;
  .pay-title{
    text-align: right;
  span{
    font-size:28px;
    color:orangered;
  }
  }
  .pay-main{
    background:#fff;
    margin-top:10px;
    border-top: 5px orange solid;
    padding:30px;
  h4{
    font-size: 28px;
    font-weight: normal;
    margin-bottom: 10px;
  }
  .pay-qrcode{
    padding:0 80px;
  }
  .qrcode{
    border:1px #ddd solid;
    padding:15px;
    height: fit-content;
  #qrcode-stage{
    width:200px;
    height:200px;
    margin-bottom: 10px;
  }
  p{
    line-height: 2;
    text-align: center;
  }
  }
  }
  }
  }
</style>
