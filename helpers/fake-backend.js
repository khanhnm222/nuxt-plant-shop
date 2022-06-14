/* eslint-disable prefer-promise-reject-errors */
// array in local storage for registered users
// const users = process.client ? JSON.parse(localStorage.getItem('users')) || [] : []
const users = [
  {
    name: 'Khanh',
    email: 'khanh@gmail.com',
    password: 123456
  },
  {
    name: 'Khanh',
    email: 'khanh@gmail.com',
    password: 123456
  }
]

export function configureFakeBackend () {
  const realFetch = window.fetch
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate
        if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
          // get parameters from post request
          const params = JSON.parse(opts.body)

          // find if any user matches login credentials
          const filteredUsers = users.filter((user) => {
            return user.email === params.email && user.password === params.password
          })

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            const user = filteredUsers[0]
            const responseJson = {
              id: user.id,
              email: user.email,
              firstName: user.firstName,
              lastName: user.lastName,
              token: 'fake-jwt-token'
            }
            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) })
          } else {
            // else return error
            reject('email or password is incorrect')
          }

          return
        }

        // get users
        if (url.endsWith('/users') && opts.method === 'GET') {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) })
          } else {
            // return 401 not authorised if token is null or invalid
            reject('Unauthorised')
          }

          return
        }

        // get user by id
        if (url.match(/\/users\/\d+$/) && opts.method === 'GET') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            // find user by id in users array
            const urlParts = url.split('/')
            const id = parseInt(urlParts[urlParts.length - 1])
            const matchedUsers = users.filter((user) => { return user.id === id })
            const user = matchedUsers.length ? matchedUsers[0] : null

            // respond 200 OK with user
            resolve({ ok: true, text: () => JSON.stringify(user) })
          } else {
            // return 401 not authorised if token is null or invalid
            reject('Unauthorised')
          }

          return
        }

        // register user
        if (url.endsWith('/users/register') && opts.method === 'POST') {
          // get new user object from post body
          const newUser = JSON.parse(opts.body)

          // validation
          const duplicateUser = users.filter((user) => { return user.email === newUser.email }).length
          if (duplicateUser) {
            reject('email "' + newUser.email + '" is already taken')
            return
          }

          // save new user
          newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1
          users.push(newUser)
          if (process.client) {
            localStorage.setItem('users', JSON.stringify(users))
          }

          // respond 200 OK
          resolve({ ok: true, text: () => Promise.resolve() })

          return
        }

        // delete user
        if (url.match(/\/users\/\d+$/) && opts.method === 'DELETE') {
          // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
          if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
            // find user by id in users array
            const urlParts = url.split('/')
            const id = parseInt(urlParts[urlParts.length - 1])
            for (let i = 0; i < users.length; i++) {
              const user = users[i]
              if (user.id === id) {
                // delete user
                users.splice(i, 1)
                if (process.client) {
                  localStorage.setItem('users', JSON.stringify(users))
                }
                break
              }
            }

            // respond 200 OK
            resolve({ ok: true, text: () => Promise.resolve() })
          } else {
            // return 401 not authorised if token is null or invalid
            reject('Unauthorised')
          }

          return
        }

        // pass through any requests not handled above
        realFetch(url, opts).then(response => resolve(response))
      }, 500)
    })
  }
}
