<template>
  <div class="filters">
    <el-row type="flex" class="filters-top" justify="space-between" align="middle">
      <el-col :span="8">
        单程：
        {{ info.departCity }} - {{ info.destCity }}
        /
        {{ info.departDate }}
      </el-col>
      <el-col :span="4">
        <el-select v-model="airport" size="mini" placeholder="起飞机场" @change="airportHandler">
          <el-option
            v-for="(item, index) in value.airport"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="flightTimes" size="mini" placeholder="起飞时间" @change="timeFilterHandler">
          <el-option
            v-for="(item, index) in value.flightTimes"
            :key="index"
            :label="`${item.from}:00 - ${item.to}:00`"
            :value="item"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="company" size="mini" placeholder="航空公司" @change="companyHandler">
          <el-option
            v-for="(item, index) in value.company"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-col>
      <el-col :span="4">
        <el-select v-model="planeSize" size="mini" placeholder="机型">
          <el-option
            v-for="(item, index) in planeType"
            :key="index"
            :label="item.label"
            :value="item.type"
          />
        </el-select>
      </el-col>
    </el-row>
    <div class="filter-cancel">
      筛选：
      <el-button
        type="primary"
        round
        plain
        size="mini"
        @click="resetHandle"
      >
        撤销
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 获取到的航班信息
      value: {},
      // 航班信息
      info: {},
      // 绑定的起飞机场
      airport: '',
      // 起飞时间
      flightTimes: '',
      // 公司
      company: '',
      // 飞机型号
      planeSize: '',
      // 飞机机型选项
      planeType: [
        { label: '大', type: 'L' },
        { label: '中', type: 'M' },
        { label: '小', type: 'S' }
      ]
    }
  },
  mounted () {
    // 初始化航班过滤选项信息
    this.value = this.$store.state.flights.options
    this.info = this.$store.state.flights.info
  },
  methods: {
    // 起飞机场筛选操作函数
    airportHandler (value) {
      this.$store.commit('flights/airportFilter', value)
    },

    // 时间过滤函数
    timeFilterHandler (value) {
      this.$store.commit('flights/timeFilter', value)
    },

    // 公司过滤函数
    companyHandler (value) {
      this.$store.commit('flights/companyFilter', value)
    },

    // 撤销筛选函数
    resetHandle () {
      // 让vuex的filterList数组重置成最原始的数据
      this.$store.commit('flights/resetFilter')
      this.airport = this.flightTimes = this.company = this.planeSize = ''
    }
  }
}
</script>

<style scoped lang="less">
  .filters{
    margin-bottom:20px;
  }

  .filters-top{
    > div{
      /deep/ .el-select{
        margin-left:10px;
      }
    }
  }

  .filter-cancel{
    margin-top:10px;
  }
</style>
