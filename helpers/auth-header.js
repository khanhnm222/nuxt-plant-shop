export function authHeader () {
  // return authorization header with jwt token
  const user = process.client ? JSON.parse(localStorage.getItem('user')) : {}

  if (user && user.token) {
    return { Authorization: 'Bearer ' + user.token }
  } else {
    return {}
  }
}
