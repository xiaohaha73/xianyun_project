<template>
  <div>
    <div class="air-column">
      <h2>乘客</h2>
      <el-form class="member-info">
        <!-- 乘机人每一组数据 -->
        <div
          v-for="(item, index) in users"
          :key="index"
          class="member-info-item"
        >
          <el-form-item label="乘机人类型">
            <el-input
              v-model="item.username"
              placeholder="姓名"
              class="input-with-select"
            >
              <el-select
                slot="prepend"
                value="1"
                placeholder="请选择"
              >
                <el-option label="成人" value="1" />
              </el-select>
            </el-input>
          </el-form-item>

          <el-form-item label="证件类型">
            <el-input
              v-model="item.id"
              placeholder="证件号码"
              class="input-with-select"
            >
              <el-select
                slot="prepend"
                value="1"
                placeholder="请选择"
              >
                <el-option label="身份证" value="1" :checked="true" />
              </el-select>
            </el-input>
          </el-form-item>

          <!-- 删除乘机人 -->
          <span class="delete-user" @click="handleDeleteUser(index)">-</span>
        </div>
      </el-form>

      <el-button class="add-member" type="primary" @click="handleAddUsers">
        添加乘机人
      </el-button>
    </div>

    <div class="air-column">
      <h2>保险</h2>
      <div>
        <div
          v-for="(item, index) in info.insurances"
          :key="index"
          class="insurance-item"
        >
          <el-checkbox
            :label="`${item.type}：￥${item.price}/份×1
                    最高赔付${item.compensation}`"
            border
            @change="handleInsurances(item)"
          />
        </div>
      </div>
    </div>

    <div class="air-column">
      <h2>联系人</h2>
      <div class="contact">
        <el-form label-width="60px">
          <el-form-item label="姓名">
            <el-input v-model="contactName" />
          </el-form-item>

          <el-form-item label="手机">
            <el-input v-model="contactPhone" placeholder="请输入内容">
              <template slot="append">
                <el-button @click="handleSendCaptcha">
                  发送验证码
                </el-button>
              </template>
            </el-input>
          </el-form-item>

          <el-form-item label="验证码">
            <el-input v-model="captcha" />
          </el-form-item>
        </el-form>
        <el-button type="warning" class="submit" @click="handleSubmit">
          提交订单
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 接收传递过来的url地址中的seat_xid
    params: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // 存放航班详细信息
      info: {
        allPrice: 0, // 最后的总价格
        num: 0, // 乘客数量
        times: '' // 航班时间
      },
      // 乘客信息
      users: [
        {
          username: '',
          id: '' // 身份证号码
        }
      ],
      // 选中的保险数组
      insurance: [],

      // 联系人姓名
      contactName: '',
      // 联系人电话号码
      contactPhone: '',
      // 验证码
      captcha: '000000',
      // 是否需要发票
      invoice: false

    }
  },

  mounted () {
    // 获取航班信息
    this.getData()
  },

  methods: {
    // 发送请求获取机票详细信息的函数
    async getData () {
      const url = '/airs/' + this.$route.query.id
      const { data: res } = await this.$axios.get(url, { parmas: this.params })
      this.info = res
    },

    // 添加乘机人
    handleAddUsers () {
      // 给user数组添加一个新元素就行
      const user = {
        username: '',
        id: ''
      }
      this.users.push(user)
    },

    // 移除乘机人
    handleDeleteUser (index) {
      // 将数组users中的对应元素删除
      this.users.splice(index, 1)
    },

    // 获取选中的保险数据
    handleInsurances (item) {
      const index = this.insurance.indexOf(item.id)
      if (index !== -1) {
        // 存在的情况,剔除掉
        this.insurance.splice(index, 1)
      } else {
        // 不存在的情况
        this.insurance.push(item.id)
      }
    },

    // 发送手机验证码
    handleSendCaptcha () {
    },

    // 提交订单
    async handleSubmit () {
      const data = {
        users: this.users,
        insurances: this.insurance,
        contactName: this.contactName,
        contactPhone: this.contactPhone,
        captcha: this.captcha,
        invoice: this.invoice,
        seat_xid: this.$route.query.seat_xid,
        air: this.$route.query.id
      }

      const token = this.$store.state.user.userInfo.token

      // 提交订单信息
      const res = await this.$axios({
        url: '/airorders',
        methods: 'POST',
        data,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (res.status !== 200) {
        // 提交失败
        this.$message.error('网络异常，请稍后重试！')
      }

      // 调用函数，计算最终的价格到达时间和将数据传回父组件
      this.figure()

      // 提交成功
      this.$message.success('正在生成订单!请稍等')

      // 页面跳转
      this.$router.push({
        path: '/air/pay',
        query: {
          id: res.data[0].id
        }
      })
    },

    // 计算机票最终价格的函数
    figure () {
      // 计算总的机票价格
      let price = 0

      // 机票的单价
      price += this.info.base_price

      // 燃油费
      price += this.info.airport_tax_audlet

      // 保险
      price += 30 * this.insurance.length

      // 乘机人数量
      price *= this.users.length

      this.info.allPrice = price
      this.info.num = this.users.length

      // 计算航班时间
      // 到达时间的小时和分钟
      let arrHours = Number(this.info.arr_time.split(':')[0])
      const arrMin = Number(this.info.arr_time.split(':')[1])
      // 判断0点之后的情况
      arrHours = arrHours >= 0 ? arrHours : arrHours += 24

      // 起飞时间的小时和分钟
      let dstHours = Number(this.info.dep_time.split(':')[0])
      const dstMin = Number(this.info.dep_time.split(':')[1])

      dstHours = dstHours >= 0 ? dstHours : dstHours += 24

      // 计算间隔时间
      const hours = arrHours - dstHours
      const minutes = arrMin - dstMin
      this.info.times = `${hours}时${minutes}分`

      // 将data数据传递给父组件
      this.$emit('getData', this.info)
    }
  }
}
</script>

<style scoped>

</style>
