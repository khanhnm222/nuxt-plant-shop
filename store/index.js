import Vuex from 'vuex'
import state from './state'
import account from './modules/account'
import user from './modules/user'
const createStore = () => {
  return new Vuex.Store({
    state,
    modules: {
      account,
      user
    }
  })
}
export default createStore
