import { userService } from '~/services/user/user.service'

export default {
  login ({ dispatch, commit }, { email, password }) {
    commit('loginRequest', { email })

    userService.login(email, password)
      .then(
        (user) => {
          commit('loginSuccess', user)
          this.$router.push('/')
        },
        (error) => {
          commit('loginFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  logout ({ commit }) {
    userService.logout()
    commit('logout')
  },
  register ({ dispatch, commit }, user) {
    commit('registerRequest', user)

    userService.register(user)
      .then(
        (user) => {
          commit('registerSuccess', user)
          this.$router.push('/signin')
          setTimeout(() => {
            // display success message after route change completes
            dispatch('alert/success', 'Registration successful', { root: true })
          })
        },
        (error) => {
          commit('registerFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
