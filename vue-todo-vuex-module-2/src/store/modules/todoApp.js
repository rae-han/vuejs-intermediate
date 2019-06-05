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

const state = {
  headerText: "TODO it!",
  todoItems: storage.fetch(),
  count: 2,
  product: null
}

const getters = {
  storedTodoItems(state) {
    return state.todoItems;
  },
  getCount(state) {
    return state.count;
  },
  reverseHeaderText(state) {
    return state.headerText.split('').reverse().join('');
  }
}

const mutations = {
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
  }
}

const actions = {
  delayedAddCounter(context) {
    setTimeout(()=> {
      context.commit('addCounter');
    }, 2000)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}