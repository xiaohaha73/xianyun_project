<template>
  <div class="container">
    <!--    轮播图组件-->
    <el-carousel height="700px" :interval="5000">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.url" class="banner-img">
      </el-carousel-item>
    </el-carousel>
    <!--    搜索框-->
    <div class="banner-content">
      <div class="search-bar">
        <!-- tab栏 -->
        <el-row
          type="flex"
          class="search-tab"
        >
          <span
            v-for="(item, index) in options"
            :key="index"
            :class="currentOption === index? 'active':''"
            @click="activeHandler(index)"
          >
            <i>{{ item.name }}</i>
          </span>
        </el-row>

        <!-- 输入框 -->
        <el-row
          type="flex"
          align="middle"
          class="search-input"
        >
          <input v-model="searchValue" :placeholder="options[currentOption]['placeholder']" @keyup.enter="searchHandler">
          <i class="el-icon-search" @click="searchHandler" />
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 轮播图数据
      banners: [],
      // 搜索tab栏的标签数据
      options: [
        {
          name: '攻略',
          placeholder: '搜索城市',
          pageUrl: '/post?city='
        },
        {
          name: '酒店',
          placeholder: '请输入城市搜索酒店',
          pageUrl: '/hotel?city='
        },
        {
          name: '机票',
          placeholder: '请输入出发地',
          pageUrl: '/air'
        }
      ],
      // 搜索框选中的选项
      currentOption: 0,

      // 输入的搜索内容
      searchValue: ''
    }
  },
  mounted () {
    // 获取轮播图的数据
    this.getBanners()
  },
  methods: {
    // 获取轮播图的函数
    async getBanners () {
      const { data: res } = await this.$axios.get('scenics/banners')
      // 重新拼接一下url地址
      this.banners = res.data
      this.banners.forEach((item) => {
        item.url = 'http://127.0.0.1:1337' + item.url
      })
    },

    // tab点击切换函数
    activeHandler (index) {
      this.currentOption = index
      // 判断如果是切换到了航空tab就直接跳转到航空页面，不需要再使用搜索框
      if (this.currentOption === 2) {
        this.$router.push(this.options[2].pageUrl)
      }
    },

    // 搜索框搜索事件
    searchHandler () {
      // 判断搜索内容是否为空
      if (this.searchValue.trim().length === 0) {
        // 搜索内容为空
        this.$message({
          message: '搜索内容不能为空!',
          type: 'error'
        })

        return false
      }
      // 搜索内容不为空
      // 拼接url地址
      const url = this.currentOption === 2 ? this.options[this.currentOption].pageUrl : this.options[this.currentOption].pageUrl + this.searchValue.trim()
      // 根据地址进行跳转
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="less">
  .container {
    min-width:1000px;
    margin: 0 auto;
    position:relative;
  }
  .banner-img{
    width: 100%;
    height: 100%;
  }

  .banner-content{
    z-index:9;
    width:1000px;
    position:absolute;
    left:50%;
    top:45%;
    margin-left: -500px;
    border-top:1px transparent solid;

    .search-bar{
      width:552px;
      margin:0 auto;
    }

    .search-tab{
      .active{
        i{
          color:#333;
        }
        &::after{
          background: #eee;
        }
      }

      span{
        width:82px;
        height:36px;
        display:block;
        position: relative;
        margin-right:8px;
        cursor: pointer;

        i{
          position:absolute;
          z-index:2;
          display: block;
          width:100%;
          height:100%;
          line-height:30px;
          text-align:center;
          color:#fff;
        }

        &:after{
          position: absolute;
          left:0;
          top:0;
          display:block;
          content: "";
          width:100%;
          height:100%;
          border: 1px rgba(255,255,255,.2) solid;
          border-bottom: none;
          transform: scale(1.1,1.3) perspective(.7em) rotateX(2.2deg);
          transform-origin: bottom left;
          background: rgba(0,0,0,.5);
          border-radius:1px 2px 0 0;
          box-sizing:border-box;
        }
      }
    }

    .search-input{
      width:550px;
      height:46px;
      background:#fff;
      border-radius: 0 4px 4px 4px;
      border: 1px rgba(255,255,255,.2) solid;
      border-top:none;
      box-sizing: unset;

      input{
        flex:1;
        height:20px;
        padding: 13px 15px;
        outline: none;
        border:0;
        font-size:16px;
      }

      .el-icon-search{
        cursor :pointer;
        font-size:22px;
        padding:0 10px;
        font-weight:bold;
      }
    }
  }
</style>
