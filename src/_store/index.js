import Vue from 'vue';
import Vuex from 'vuex';

import Auth from './Modules/Auth';
import UserList from './Modules/UserList';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    UserList,
  }
})