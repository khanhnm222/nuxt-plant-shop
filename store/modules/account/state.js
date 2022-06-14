const user = process.client ? JSON.parse(localStorage.getItem('user')) : {}
// const user = {
//   name: 'Khanh',
//   email: 'khanh@gmail.com'
// }
export default () => {
  return user ? { status: { loggedIn: true }, user } : { status: {}, user: null }
}
