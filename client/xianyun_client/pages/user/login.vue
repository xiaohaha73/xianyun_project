<template>
  <div class="container">
    <div class="login_box">
      <div>
        <div class="login_header">
          <span v-for="(item, index) in tabTag" :key="index" :class="current === index? 'active':''" @click="currentHandler(index)">{{ item }}</span>
        </div>
        <login v-if="current === 0" class="login_content">
          登录内容
        </login>
        <Register v-if="current === 1" class="login_content">
          注册内容
        </Register>
      </div>
    </div>
  </div>
</template>

<script>
import login from '@/components/user/login'
import register from '@/components/user/register'
export default {
  components: {
    Login: login,
    Register: register
  },
  data () {
    return {
      // tab标签的显示标题
      tabTag: ['登录', '注册'],

      // 选中tab的值
      current: 0
    }
  },
  methods: {
    // 点击tab函数
    currentHandler (index) {
      this.current = index
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    min-width:1000px;
    height: 700px;
    overflow:hidden;
    background: url(http://127.0.0.1:1337/assets/images/th03.jfif) center 0;
    .login_box{
      width: 400px;
      /*height: 100%;*/
      margin: 150px auto;
      box-shadow: 2px 2px 2px rgba(0,0,0,0.2);
      .login_header {
        display:flex;
        flex-direction:row;
        span {
          height: 50px;
          width: 200px;
          border:1px solid #cccccc{
          bottom:0;
          left:0;
        };
          text-align: center;
          line-height:50px;
          box-sizing: border-box;
          background-color: #eeeeee;
          color: #666;
        }
      /*  选中样式*/
        .active{
          border-top: 2px solid orange;
          background: white;
          color:orange;
          font-weight: bold;
        }

      }
    }
  }

</style>
