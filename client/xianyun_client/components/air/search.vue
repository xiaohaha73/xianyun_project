<template>
  <div class="search-form">
    <!-- 头部tab切换 -->
    <el-row type="flex" class="search-tab">
      <span
        v-for="(item, index) in tabs"
        :key="index"
        :class="{active: index === currentTab}"
        @click="handleSearchTab(item, index)"
      >
        <i :class="item.icon" />
        {{ item.name }}
      </span>
    </el-row>

    <el-form ref="submit_form" :model="form" class="search-form-content" :rules="rules" label-width="80px">
      <el-form-item label="出发城市" prop="departCity">
        <!-- fetch-suggestions: 每次输入时候都会执行，设置下拉菜单的数据 -->
        <!-- select：选中下拉菜单的值时候触发 -->
        <el-autocomplete
          v-model="form.departCity"
          :fetch-suggestions="queryDepartSearch"
          placeholder="请搜索出发城市"
          class="el-autocomplete"
          :trigger-on-focus="false"
          @select="DepartSelect"
        />
      </el-form-item>

      <el-form-item label="到达城市" prop="destCity">
        <el-autocomplete
          v-model="form.destCity"
          :fetch-suggestions="queryDestSearch"
          placeholder="请搜索到达城市"
          class="el-autocomplete"
          :trigger-on-focus="false"
          @select="Destselect"
        />
      </el-form-item>

      <el-form-item label="出发时间" prop="departDate">
        <!-- type:声明选中器是日期的选择器 -->
        <!-- change: 选中日期时候触发的事件 -->
        <el-date-picker
          v-model="form.departDate"
          type="date"
          placeholder="请选择日期"
          style="width: 100%;"
          @change="selectDate"
        />
      </el-form-item>

      <el-form-item label>
        <el-button style="width:100%;" type="primary" icon="el-icon-search" @click="submitHandle()">
          搜索
        </el-button>
      </el-form-item>
      <div class="reverse">
        <span @click="changeHandler">换</span>
      </div>
    </el-form>
  </div>
</template>

<script>

import moment from 'moment'
export default {
  data () {
    return {
      // tab切换栏名称
      tabs: [
        {
          icon: 'iconfont icondancheng',
          name: '单程'
        },
        {
          icon: 'iconfont iconshuangxiang',
          name: '往返'
        }
      ],

      // 选中的index值
      currentTab: 0,

      // 机票搜索提交表单验证规则
      rules: {
        departCity: [
          { required: true, message: '出发地不能为空', trigger: 'blur' }
        ],
        destCity: [
          { required: true, message: '目的地不能为空', trigger: 'blur' }
        ],
        departDate: [
          { required: true, message: '日期不能为空', trigger: 'blur' }
        ]
      },

      // 出发城市相关参数
      form: {
        departCity: '', // 绑定的出发城市
        departCode: '', // 出发城市代码
        destCity: '', // 绑定的到达城市
        destCode: '', // 到达城市代码
        departDate: '' // 到达时间
      },

      // 用于核对出发城市和抵达城市的id
      cityCode: ''
    }
  },
  methods: {
    // tab点击切换函数
    handleSearchTab (item, index) {
      this.currentTab = index
      if (this.currentTab === 1) {
        this.$confirm('往返票业务尚未开放', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })

        // 然后跳转回单程票业务
        this.currentTab = 0
      }
    },

    // 出发城市提示函数
    async queryDepartSearch (query, callback) {
      if (!query) {
        return false
      }

      // 请求城市数据
      const { data: res } = await this.$axios.get('/airs/city?name=' + query)
      const newData = res.data.map((item) => {
        return {
          value: item.name.replace('市', ''),
          ...item
        }
      })
      callback(newData)
    },

    // 到达城市提示函数
    async queryDestSearch (query, callback) {
      const { data: res } = await this.$axios.get('/airs/city?name=' + query)

      // 从返回的数据中将相同的cityCode的城市进行删除
      const target = res.data.findIndex((item) => {
        return item.code === this.cityCode
      })

      // 将查找到的相同城市进行删除
      res.data.splice(target, 1)

      const newData = res.data.map((item) => {
        return {
          value: item.name.replace('市', ''),
          ...item
        }
      })
      callback(newData)
    },

    // 出发城市搜索框选中函数
    DepartSelect (data) {
      const { value, sort, code } = data
      this.form.departCity = value
      this.form.departCode = sort
      this.cityCode = code
    },

    // 到达城市选中函数
    Destselect (data) {
      const { value, sort } = data
      this.form.destCity = value
      this.form.destCode = sort
    },

    // 出发地和到达地交换位置函数
    changeHandler () {
      // 解构交换数值
      [this.form.departCity, this.form.destCity, this.form.departCode, this.form.destCode] = [this.form.destCity, this.form.departCity, this.form.destCode, this.form.departCode]
    },

    // 选中时间函数
    selectDate (date) {
      this.form.departDate = moment(date).format('YYYY-MM-DD')
    },

    // 订机票表单提交函数
    submitHandle () {
      // 对表单进行验证是否满足条件
      this.$refs.submit_form.validate((isRight) => {
        if (!isRight) {
          // 验证不通过
          this.$message.warning('提交信息不完整！')
          return false
        }
        // 验证通过
        this.$router.push({
          path: '/air/flights',
          query: this.form
        })

        // 调用vuex进行缓存
        this.$store.commit('history/updateSearchHistory', this.form)
      })
    }
  }
}
</script>

<style scoped lang="less">
  .search-form {
    border: 1px #ddd solid;
    border-top: none;
    width: 360px;
    height: 350px;
    box-sizing: border-box;
  }

  .search-tab {
    span {
      display: block;
      flex: 1;
      text-align: center;
      height: 48px;
      line-height: 42px;
      box-sizing: border-box;
      border-top: 3px #eee solid;
      background: #eee;
      cursor: pointer;
    }

    .active {
      border-top-color: orange;
      background: #fff;
    }

    i {
      margin-right: 5px;
      font-size: 18px;

      &:first-child {
        font-size: 16px;
      }
    }
  }

  .search-form-content {
    padding: 15px 50px 15px 15px;
    position: relative;

    .el-autocomplete {
      width: 100%;
    }
  }

  .reverse {
    position: absolute;
    top: 35px;
    right: 15px;

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      left: -35px;
      width: 25px;
      height: 1px;
      background: #ccc;
    }

    &:after {
      top: 0;
    }

    &:before {
      top: 60px;
    }

    span {
      display: block;
      position: absolute;
      top: 20px;
      right: 0;
      font-size: 12px;
      background: #999;
      color: #fff;
      width: 20px;
      height: 20px;
      line-height: 18px;
      text-align: center;
      border-radius: 2px;
      cursor: pointer;

      &:after,
      &:before {
        display: block;
        content: "";
        position: absolute;
        left: 10px;
        width: 1px;
        height: 20px;
        background: #ccc;
      }

      &:after {
        top: -20px;
      }

      &:before {
        top: 20px;
      }
    }
  }
</style>
