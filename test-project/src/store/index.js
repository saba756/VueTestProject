// store/index.js
import { createStore } from 'vuex'
import settings from './modules/settings'
import table from './modules/table'
const store = createStore({
  modules: {
    settings,
    table
  }
})
store.state.settings
// `moduleA`'s state
export default store
