<template>
  <div class="container">
    <el-row type="flex" justify="space-between">
      <div class="main">
        <OrderMain :params="params" @getData="transmission" />
      </div>

      <div class="aside">
        <OrderAside :data="submitForm" />
      </div>
    </el-row>
  </div>
</template>

<script>
import OrderMain from '@/components/air/orderMain'
import OrderAside from '@/components/air/orderSide'
export default {
  components: {
    OrderMain, // 订票提交表单
    OrderAside // 侧边栏组件
  },
  data () {
    return {
      params: '', // 传递给子组件的url地址传递过来的参数
      submitForm: {} // 通过子组件传递过来的表单
    }
  },

  mounted () {
    // 初始化params的值
    this.params = this.$route.seat_xid
  },

  methods: {
    // 子组件传递提交表单的函数
    transmission (data) {
      this.submitForm = data
    }
  }
}
</script>

<style scoped lang="less">
  .air-column{
    border-bottom:1px #ddd dashed;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .air-column h2{
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: normal;
  }

  /deep/ .el-select .el-input {
    width: 130px;
  }

  .input-with-select{
    width:590px;
  }

  .input-with-select /deep/  .el-input-group__prepend {
    background-color: #fff;
  }
  .member-info /deep/ .el-form-item{
    margin-bottom:0;
  }

  .member-info-item{
    border-bottom:1px #eee dashed;
    padding-bottom: 20px;
    position: relative;

    &:first-child{
      .delete-user{
        display: none;
      }
    }
  }

  .add-member{
    margin-top:20px;
  }

  .delete-user{
    display: block;
    background:#ddd;
    width:16px;
    height:16px;
    font-size:14px;
    text-align: center;
    line-height: 16px;
    color:#fff;
    cursor: pointer;
    border-radius: 50px;
    position:absolute;
    right:-30px;
    top:50%;
  }

  .insurance{
    > div{
      margin-top:10px;
    }
  }

  .insurance-item{
    margin-bottom: 20px;
  }

  .contact{
    /deep/ .el-input{
      width:50%;
    }
  }

  .submit{
    margin: 50px auto;
    display: block;
    width:250px;
    height:50px;
  }
</style>
