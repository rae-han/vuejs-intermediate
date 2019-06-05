import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex); // Use(Vue의 플러그인 기능)Vue를 사용하는 모든 곳에서 해당 기능을 사용하고 싶을때

const storage = {
  fetch() {
    const arr = [];

    if (localStorage.length > 0) {
      for (let i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // this.todoItems.push(localStorage.key(i));
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }

    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    headerText: "TODO it!",
    todoItems: storage.fetch(),
    count: 2,
    product: null
  },
  getters: getters,
  mutations: mutations,
  actions: {
    delayedAddCounter(context) {
      setTimeout(()=> {
        context.commit('addCounter');
      }, 2000)
    },
  }
})