import { post, get, setToken } from '_helpers/ApiService'

export default {
  state: () => ({
    auth: {
      isAuth: false,
      token: '',
      data: {}
    },
  }),
  getters: {
    AUTH_USER(state) 
    {
      return state.auth;
    },
  },
  mutations: {
    SET_AUTH_USER(state, payload) 
    {
      state.auth = payload;
    },
  },
  actions: {
    async LOGIN(context, payload) 
    {
      try {
        const { data } = await post('auth/login', payload)
        return data
      } catch (err) {
        throw err
      }
    },
    async AUTH_SHOW(context, payload) 
    {
      try {
        const auth = localStorage.getItem('_auth') ? await JSON.parse(localStorage.getItem('_auth')) : null
        if(auth) {
          const { data } = await get('auth/show', {})
          const newAuth = {
            ...context.state.auth,
            token: auth.token,
            isAuth: auth ? true : false,
            data: data.user
          }
          context.commit('SET_AUTH_USER', newAuth);
          await localStorage.setItem('_auth', JSON.stringify(newAuth))
          return data
        }
      } catch (err) {
        throw err
      }
    },
    async REGISTRATION(context, payload) 
    {
      try {
        const { data } = await post('auth/register', payload)
        return data
      } catch (err) {
        throw err
      }
    },
    async LOGOUT(context, payload) 
    {
      try {
        const { data } = await post('auth/logout')
        return data
      } catch (err) {
        throw err
      }
    }
  },
}