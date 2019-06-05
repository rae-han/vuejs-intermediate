<template>
  <div id="app">
    <todo-header></todo-header> <!-- 이게 가장 권고하는 거지만 밑에 푸터도 가능한 가이드. 테그가 섞여 잘 보이지 않는다. -->
    <todo-input></todo-input>
    <todo-list></todo-list>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from '@/components/TodoHeader.vue';
import TodoFooter from '@/components/TodoFooter.vue';
import TodoInput from '@/components/TodoInput.vue';
import TodoList from '@/components/TodoList.vue';


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
    }
  },
  methods: {

  },
  created() {

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
