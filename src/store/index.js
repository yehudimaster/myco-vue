import { createStore, createLogger } from 'vuex'
import state from './state'
import mutations from './mutations'
const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  strict: debug,
  plugins: debug ? [createLogger()] : [],
  state: state,
  getters: {},
  actions: {},
  mutations: mutations
})
