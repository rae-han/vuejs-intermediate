<template>
  <div id="app">
    <todo-header></todo-header> <!-- 이게 가장 권고하는 거지만 밑에 푸터도 가능한 가이드. 테그가 섞여 잘 보이지 않는다. -->
    <todo-input @addTodoItem="addOneItem"></todo-input>
    <todo-list :propsTodoItems="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"></todo-list>
    <TodoFooter @clearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoFooter from '@/components/TodoFooter.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';

import ip from 'ip';

export default {
  name: 'app',
  components: {
    'todo-header': TodoHeader,
    TodoFooter,
    'todo-input': TodoInput,
    'todo-list': TodoList
  },
  data () {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem(todoItem) {
      let obj = {
        completed: false,
        item: todoItem
      }

      localStorage.setItem(todoItem, JSON.stringify(obj));
      // application -> localstorage 에서 확인 가능
      // stringfy 를 하지 않으면 값이 [object Object]로 저장된다.
      this.todoItems.push(obj);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems() {
      this.todoItems=[];
      localStorage.clear();
    }
  },
  created() {
    console.log(ip.address());

    if (localStorage.length > 0) {
      for (let i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          // this.todoItems.push(localStorage.key(i));
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
  }
}
</script>

<style lang="scss">
body {
  text-align: center;
  background-color: #F6F6F8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
}
</style>
