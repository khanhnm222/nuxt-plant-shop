import Vuex from 'vuex'
import state from './state'
import account from './modules/account'
import user from './modules/user'
import cart from './modules/cart'
const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state,
    modules: {
      account,
      user,
      cart
    }
  })
}
export default createStore
