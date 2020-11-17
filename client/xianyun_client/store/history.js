const state = () => ({
  // 航班搜索记录
  searchHistory: []
})

const mutations = {
  // 缓存航班搜索记录的函数
  updateSearchHistory (state, data) {
    state.searchHistory.unshift(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
