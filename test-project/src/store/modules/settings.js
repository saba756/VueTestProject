import jsonData from './settings.json'
const namespaced = true
const state = {
  //settings:{rowsCount:5,dateFormat: true,email:[], }
  settings: {}
}

const mutations = {
  getSettingsData(state, data) {
    console.log('mutating data..', data)
    state.settings = data
  }
}

const actions = {
  getSettings({ commit }) {
    console.log('data setting', jsonData)
    commit('getSettingsData', jsonData)
  }
}

export default {
  state,
  mutations,
  namespaced,
  actions
}
