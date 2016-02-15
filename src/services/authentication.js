import Auth0Lock from 'Auth0Lock'
import credentials from '../auth0-variables.js'
import store from '../store.js'
import { router } from '../main'

var lock = new Auth0Lock(credentials.AUTH0_CLIENT_ID, credentials.AUTH0_DOMAIN)

export default {
  checkAuth() {
    if (localStorage.getItem('id_token')) {
      store.dispatch('LOGIN')
      return true
    }

    return false
  },

  isLoggedIn() {
    if (localStorage.getItem('id_token')) {
      store.dispatch('LOGIN')
      return true
    }

    return false
  },

  login() {
    lock.show((err, profile, token) => {
      store.dispatch('LOGIN')
      localStorage.setItem('profile', JSON.stringify(profile))
      localStorage.setItem('id_token', token)

      router.go('/account')
    })
  },

  logout() {
    store.dispatch('LOGOUT')

    // Remove the profile and token from localStorage
    localStorage.removeItem('profile')
    localStorage.removeItem('id_token')

    router.go('/')
  }
}
