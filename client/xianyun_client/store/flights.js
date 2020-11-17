// 存储飞机航班的数据
const state = () => ({
  // 航班信息，通过ajax请求到的原始数据
  flights: [],
  // 航空公司等详细信息
  options: {},
  // 总的信息条数
  total: 0,
  // 查询的航班信息
  info: {},
  // 存储机票过滤列表
  filterList: []
})

const mutations = {
  // 请求航班数据的函数
  flightsDataGet (state, data) {
    // 请求数据成功,存储到state中
    const { flights, info, options, total } = data
    state.flights = state.backupData = state.filterList = flights // 备份数据用于还原操作
    state.info = info
    state.options = options
    state.total = total
    state.detailData = data
  },

  // 机场条件筛选函数
  airportFilter (state, data) {
    state.filterList = state.flights.filter((item) => {
      return item.org_airport_name === data
    })

    // 重置渲染数据数组长度
    state.total = state.filterList.length
  },

  // 时间过滤函数
  timeFilter (state, data) {
    // console.log(data.from)
    state.filterList = state.flights.filter((item) => {
      return Number(item.dep_time.split(':')[0]) >= data.from && Number(item.dep_time.split(':')[0]) < data.to
    })

    // 重置渲染数据数组长度
    state.total = state.filterList.length
  },

  // 航空公司筛选
  companyFilter (state, data) {
    state.filterList = state.flights.filter((item) => {
      return item.airline_name === data
    })

    // 重置渲染数据数组长度
    state.total = state.filterList.length
  },

  // 过滤器重置函数
  resetFilter (state) {
    state.filterList = state.flights

    // 重置渲染数据数组长度
    state.total = state.filterList.length
  },

  // 数据分页函数
  sliceList (state, currentPage = 1, pageSize = 5) {
    state.filterList = state.filterList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    // 重置渲染数据数组长度
    state.total = state.filterList.length
  }

}

const actions = {

  // 请求航班数据的异步操作函数
  async getFlightsData (state, data) {
    const result = await this.$axios.get('/airs', { params: data })
    // 请求数据失败
    if (result.status !== 200) {
      return false
    }

    // 请求成功
    state.commit('flightsDataGet', result.data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
