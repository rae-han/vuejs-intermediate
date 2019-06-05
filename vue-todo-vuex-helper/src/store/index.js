import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex); // Use(Vue의 플러그인 기능)Vue를 사용하는 모든 곳에서 해당 기능을 사용하고 싶을때

// local storage 관련된 것들
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
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
    getCount(state) {
      return state.count;
    },
    reverseHeaderText(state) {
      return state.headerText.split('').reverse().join('');
    }
  },
  mutations: {
    addOneItem(state, data) {
      let obj = {
        completed: false,
        item: data.todoItem
      }

      localStorage.setItem(data.todoItem, JSON.stringify(obj));

      state.todoItems.push(obj);
    },
    clearAll(state) {
      state.todoItems=[];
      localStorage.clear();
    },
    removeItem(state, data) {
      localStorage.removeItem(data.todoItem.item);
      state.todoItems.splice(data.index, 1);
    },
    toggleItem(state, data) {
      localStorage.removeItem(data.todoItem.item);
      
      state.todoItems[data.index].completed = !state.todoItems[data.index].completed;
      localStorage.setItem(data.todoItem.item, JSON.stringify(data.todoItem));
    },
    addCounter(state) {
      state.count++;
    },
  },
  actions: {
    delayedAddCounter(context) {
      setTimeout(()=> {
        context.commit('addCounter');
      }, 2000)
    },
  }
})