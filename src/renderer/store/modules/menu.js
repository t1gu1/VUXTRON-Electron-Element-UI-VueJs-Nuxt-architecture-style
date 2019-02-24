const state = {
  activeIndex: "/"
}

const getters = {
  activeIndex(state) {
    console.log("getters TRIGGERED !!!!!!!!!!!!!!!!!!!!")
    return state.activeIndex
  }
}

const mutations = {
  UPDATE_ACTIVE_INDEX (state, { activeIndex }) {
    console.log("Mutations TRIGGERED !!!!!!!!!!!!!!!!!!!!", activeIndex)
    state.activeIndex = activeIndex
  },
}

const actions = {
  changeIndex ({ commit }, payload) {
    // do something async
    console.log("ACTION TRIGGERED !!!!!!!!!!!!!!!!!!!!", payload)
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