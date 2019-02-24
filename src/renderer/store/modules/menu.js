const state = {
  activeIndex: "/"
}

const getters = {
  activeIndex(state) {
    return state.activeIndex
  }
}

const mutations = {
  UPDATE_ACTIVE_INDEX (state, { activeIndex }) {
    state.activeIndex = activeIndex
  },
}

const actions = {
  changeIndex ({ commit }, payload) {
    // do something async
    commit('UPDATE_ACTIVE_INDEX', { activeIndex: payload.activeIndex})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}