//     "@types/js-cookie": "^3.0.1",
import Cookies from 'js-cookie'

const TokenKey: string = 'token'
const testToken: string = '123132131313'

export function getToken() {
  if (process.env.NODE_ENV === 'production') {
    return Cookies.get(TokenKey)
  } else {
    return testToken
  }
}

export function setToken(token: string) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}
