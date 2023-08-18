import api from '../../shared/api'

const namespaced = true
const state = {
  tableData: [],
  graphData: []
}

const mutations = {
  getTableData(state, data) {
    state.tableData = data
  },
  getGraphData(state, data) {
    state.graphData = data
  }
}

const actions = {
  async getTableData({ commit }) {
    const url = `challenge/2/static/`
    const response = await api({
      url: url,
      method: 'GET'
    })
      .then((res) => {
        console.log('resss', res)
        if (res == null || res == undefined) {
          return ''
        }
        if (res.status === 200) {
          commit('getTableData', res.data.table)
          commit('getGraphData', res.data.graph)
        }
      })
      .catch((error) => {
        console.log('error', error.response)
      })
    return response
  }
}
const getters = {
  getGraph: (state) => {
    return state.graphData
  },
}
export default {
  state,
  mutations,
  getters,
  namespaced,
  actions
}
