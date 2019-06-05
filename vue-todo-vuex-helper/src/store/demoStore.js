import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex); // Use(Vue의 플러그인 기능)Vue를 사용하는 모든 곳에서 해당 기능을 사용하고 싶을때


export const store = new Vuex.Store({
  state: {
    price: 10000
  },
  getters: {
    originalPrice(state) {
      return state.price;
    },
    doubelPrice(state) {
      return state.price*2;
    },
    triplePrice(state) {
      return state.price*3;
    }
  }
})