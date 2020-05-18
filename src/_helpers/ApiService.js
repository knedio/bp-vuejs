import axios from 'axios';

const auth = localStorage.getItem('_auth') ? JSON.parse(localStorage.getItem('_auth')).token : null

axios.defaults.headers.common['Authorization'] = `Bearer ${auth}`
axios.defaults.headers.common['Accept'] = 'application/json';

// set token
export const setToken = async () => {
  axios.interceptors.request.use(async (request) => {
    const auth = localStorage.getItem('_auth') ? await JSON.parse(localStorage.getItem('_auth')) : null
    if(auth) {
      request.headers.common['Authorization'] = `Bearer ${auth.token}`
    }
    return request
  })
}

// Request Method for dynamic method
export const request = (method, url, payload = {}, headers = {}) => {
  return axios({
    headers,
    method,
    url: process.env.VUE_APP_API_URL + url,
    [(method == 'GET') ? 'params' : 'data']: payload
  });
}

// GET Method
export const get = (url, payload = {}, headers = {}) => {
  return axios({
    headers,
    method: 'GET',
    url: process.env.VUE_APP_API_URL + url,
    params: payload
  });
}

// POST Method
export const post = (url, payload = {}, headers = {}, other = {}) => {
  return axios({
    headers,
    ...other,
    method: 'POST',
    url: process.env.VUE_APP_API_URL + url,
    data: payload
  });
}

// PUT Method
export const put = (url, payload = {}, headers = {}) => {
  return axios({
    headers,
    method: 'PUT',
    url: process.env.VUE_APP_API_URL + url,
    data: payload
  })
}

// PATCH Method
export const patch = (url, payload = {}, headers = {}) => {
  return axios({
    headers,
    method: 'PATCH',
    url: process.env.VUE_APP_API_URL + url,
    data: payload
  })
}

// DELETE Method
export const del = (url, payload = {}, headers = {}) => {
  return axios({
    headers,
    method: 'DELETE',
    url: process.env.VUE_APP_API_URL + url,
  })
}
