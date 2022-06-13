export default {
  // getUserAndState () {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   const state = user
  //     ? { status: { loggedIn: true }, user }
  //     : { status: {}, user: null }
  // },
  loginRequest (state, user) {
    state.status = { loggingIn: true }
    state.user = user
  },
  loginSuccess (state, user) {
    state.status = { loggedIn: true }
    state.user = user
  },
  loginFailure (state) {
    state.status = {}
    state.user = null
  },
  logout (state) {
    state.status = {}
    state.user = null
  },
  registerRequest (state, user) {
    console.log('registerRequest', user)
    state.status = { registering: true }
  },
  registerSuccess (state, user) {
    console.log('registerSuccess', user)
    state.status = {}
  },
  registerFailure (state, error) {
    console.log('registerFailure', error)
    state.status = {}
  }
}
