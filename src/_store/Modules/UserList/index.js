import { post, get, del, patch } from '_helpers/ApiService'

export default {
  state: () => ({
    list: {
      id: null,
      name: '',
      description: ''
    },
    lists: []
  }),
  getters: {
    USER_LIST(state) {
      return state.list;
    },
    USER_LISTS(state) {
      return state.lists;
    },
  },
  mutations: {
    SET_USER_LIST(state, payload) {
      state.list = payload;
    },
    SET_USER_LISTS(state, payload) {
      state.lists = payload;
    },
  },
  actions: {
    FETCH_USER_LISTS({ commit, state }, payload) {
      return get(`user-list`, {
        user_id: payload
      }).then(({ data }) => {
        commit('SET_USER_LISTS', []);
        commit('SET_USER_LISTS', data.lists);
        return data;
      }).catch((err) => {
        throw err;
      });
    },
    ADD_USER_LIST({ commit, state }, payload) {
      return post('user-list', payload).then(({ data }) => {
        commit('SET_USER_LISTS', [
          ...state.lists,
          data.list, 
        ]);
        return data;
      }).catch((err) => {
        throw err;
      });
    },
    UPDATE_USER_LIST({ commit, state }, payload) {
      return patch(`user-list/${payload.id}`, payload).then(({ data }) => {
        let lists = state.lists.map(user_file => {
          if (user_file.id == data.list.id) {
            user_file = data.list;
          }
          return user_file;
        });
        commit('SET_USER_LISTS', lists);
        return data;
      }).catch((err) => {
        throw err;
      });
    },
    DELETE_USER_LIST({ commit, state }, payload) {
      return del(`user-list/${payload.id}`, {}).then(({ data }) => {
        let lists = state.lists.filter(user_file => user_file.id != payload.id);
        commit('SET_USER_LISTS', lists);
        return data;
      }).catch((err) => {
        throw err;
      });
    },
  },
}