// state存储公共数据
const state = () => ({ // 将state改写成函数，不然会报警告
  // 用户登录数据的存储
  userInfo: {
    token: '',
    user: {}
  }
})

// mutations实现公共数据state的修改
const mutations = {
  // 定义一个上传用户数据的函数
  uploadUser (state, data) {
    state.userInfo = data
  },

  // 退出登录的函数
  deleteUser (state) {
    state.userInfo.token = ''
    state.userInfo.user = {}
  }
}

// 异步修改state数据
const actions = {
  // 将用户数据异步请求函数写到这，方便多次调用
  async getUser (state, data) {
    const result = await this.$axios.post('/accounts/login', data)
    if (result.status === 200) {
      // 请求成功的情况，调用mutations的uploadUser保存数据
      state.commit('uploadUser', result.data)

      return result
    }
  }

}

export default {
  namespaced: true, // 命名空间防止混乱
  state,
  actions,
  mutations
}
