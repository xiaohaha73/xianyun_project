<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>
          <FlightsFilter />
        </div>
        <!-- 航班头部布局 -->
        <div>
          <FlightsHeader />
        </div>
        <!-- 航班信息 -->
        <div>
          <FlightsItems v-for="(item,index) in $store.state.flights.filterList" :key="index" :data="item" />
        </div>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <FlightsAside />
      </div>
    </el-row>

    <!-- 数据分页功能 -->
    <el-pagination
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </section>
</template>

<script>
import flightsHeader from '@/components/air/flightsHeader'
import flightsItems from '@/components/air/flightsItems'
import flightsFilter from '@/components/air/flightsFilter'
import flightsAside from '@/components/air/flightsAside'

export default {
  components: {
    FlightsFilter: flightsFilter,
    FlightsHeader: flightsHeader,
    FlightsItems: flightsItems,
    FlightsAside: flightsAside
  },
  data () {
    return {
      // 航空公司等详细信息
      options: {},
      // 数据总条数
      total: 0,
      // 当前选中的页码
      currentPage: 1, // 默认设置成1
      // 每页显示的数据条数
      pageSize: 5 // 默认设置成5条
    }
  },

  watch: {
    $route () {
      // 每次请求地发生改变之后重新发送请求
      this.initData()
    }
  },

  mounted () {
    this.initData()
  },

  methods: {

    // 初始化航班数据函数
    initData () {
      this.$store.dispatch('flights/getFlightsData', this.$route.query)
      this.options = this.$store.state.flights.options
      // 初始化总数据条数
      this.total = this.$store.state.flights.total
      // 调用一次分页函数
      this.sliceFunction()
    },

    // 分页每页显示条数选择函数
    handleSizeChange (value) {
      this.pageSize = value
      // 调用分页函数
      this.sliceFunction()
    },

    // 分页页数选择函数
    handleCurrentChange (value) {
      this.currentPage = value
      this.sliceFunction()
    },

    // 分页函数
    sliceFunction () {
      this.$store.commit('flights/sliceList', this.currentPage, this.pageSize)
      this.total = this.$store.state.flights.total
    }
  }

}
</script>

<style scoped lang="less">
  .contianer{
    width:1000px;
    margin:20px auto;
  }

  .flights-content{
    width:745px;
    font-size:14px;
  }

  .aside{
    width:240px;
  }
</style>
