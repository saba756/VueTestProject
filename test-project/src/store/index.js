// store/index.js
import { createStore } from 'vuex'
import settings from './modules/settings'

const store = createStore({
  modules: {
    settings
  }
})
store.state.settings
// `moduleA`'s state
export default store
