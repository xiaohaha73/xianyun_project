<template>
  <div class="body">
    <el-row :gutter="24">
      <el-col :span="20">
        <el-form ref="loginForm" label-width="80px" :model="login_form" :rules="loginRules">
          <el-form-item label="账号：" prop="username">
            <el-input v-model="login_form.username" />
          </el-form-item>
          <el-form-item label="密码：" prop="password">
            <el-input v-model="login_form.password" type="password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" class="login-button" @click="loginSubmit">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <a href="#" class="forget">忘记密码</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 表单绑定的数据
      login_form: {
        username: '13800138000',
        password: '123456'
      },

      // 登录验证规则
      loginRules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    // 登录提交函数
    loginSubmit () {
      // 再次验证表单提交的数据是否符合规范
      this.$refs.loginForm.validate(async (isRight) => {
        if (!isRight) {
          // 验证失败
          this.$message({
            message: '密码或账号不能为空！',
            type: 'error'
          })
          return false
        }

        // 验证成功，请求登录接口
        // 调用vuex中封装的异步请求用户数据的函数
        const result = await this.$store.dispatch('user/getUser', this.login_form)

        // const result = await this.$axios.post('/accounts/login', this.login_form)
        if (result.status === 200) {
          // 提示用户登录成功
          this.$message.success('登录成功！')
          // 将数据上传到vuex中
          // this.$store.commit('user/uploadUser', result.data)

          // 进行页面跳转
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .body {
    background: white;
    position: relative;
    .forget {
      position: absolute;
      color:#409eff;
      bottom: 88px;
      right: 70px;
      font-size:13px;
    }
    .el-row {
      padding-top: 20px;
      .el-col {
        .el-form-item {
          .login-button {
            height: 40px;
            width: 200px;
            margin: {
              left:15px;
              top:30px;
            }
          }
        }
      }
    }
  }

</style>
