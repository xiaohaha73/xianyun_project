<template>
  <div class="body">
    <el-row :gutter="24">
      <el-col :span="20">
        <el-form ref="registerForm" label-width="80px" :model="register_form" :rules="registerFormRules">
          <el-form-item prop="username">
            <el-input v-model="register_form.username" placeholder="手机号码" />
          </el-form-item>
          <el-form-item prop="captcha">
            <el-input v-model="register_form.captcha" placeholder="输入验证码">
              <el-button slot="append" @click="sendCaptcha">
                发送验证码
              </el-button>
            </el-input>
          </el-form-item>
          <el-form-item prop="nickname">
            <el-input v-model="register_form.nickname" placeholder="昵称" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="register_form.password" placeholder="密码" type="password" />
          </el-form-item>
          <el-form-item prop="secondPassword">
            <el-input v-model="register_form.secondPassword" placeholder="再次输入密码" type="password" />
          </el-form-item>
          <el-form-item class="register_button">
            <el-button type="primary" size="medium" @click="submitHandle">
              注册
            </el-button>
            <el-button size="medium" @click="resetHandle">
              重置
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    // 第二次输入的密码的验证函数
    const checkPassword = (rule, value, callback) => {
      // 验证第二次输入的密码是否为空
      if (value === '') {
        callback(new Error('密码不能为空！'))
      } else if (value !== this.register_form.password) { // 验证两次输入的密码是否相同
        // 两次输入的密码不相同
        callback(new Error('两次输入的密码不相同！'))
      } else {
        // 验证通过的情况
        callback()
      }
    }

    return {
      // 注册绑定的表单信息
      register_form: {
        username: '13099890048',
        captcha: '000000', // 验证码
        nickname: 'xiaohaha73',
        password: '123456',
        secondPassword: '123456' // 用于二次验证密码
      },

      // 表单验证规则
      registerFormRules: {
        username: [
          { required: true, message: '请输入电话号码', trigger: 'blur' },
          { max: 11, message: '长度不能超过11位', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '昵称不能为空！', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空！', trigger: 'blur' }
        ],
        secondPassword: [
          {
            validator: checkPassword, trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    // 发送验证码的触发函数
    async sendCaptcha () {
      // 发送验证码请求
      const result = await this.$axios.post('/captchas', {
        tel: this.register_form.mobile
      })
      if (result.status === 200) {
        // 验证码请求成功
        // this.register_form.captcha = result.data.code

        // 模拟一个验证码弹窗
        this.$confirm('手机验证码为：' + result.data.code, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
      }
    },

    // 重置注册表单函数
    resetHandle () {
      this.$refs.registerForm.resetFields()
    },

    // 提交表单注册函数
    submitHandle () {
      // 再次验证表单的规则
      this.$refs.registerForm.validate(async (isRight) => {
        if (!isRight) {
          return this.$message.error('注册信息不完整！')
        }
        // 验证通过，发送请求

        // 将secondPassword结构分离出来
        const { secondPassword, ...data } = this.register_form
        const result = await this.$axios.post('/accounts/register', data)
        if (result.status === 200) {
          // 注册成功
          this.$store.commit('user/uploadUser', result.data)
          this.$message.success('注册成功！正在登录...')
          // 跳转页面
          this.$router.push('/')
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .body {
    background-color:white;
    padding-top:20px;

    .register_button {
      margin-left:40px;
    }
  }

</style>
