<template>
  <div id="todoList">
    <transition-group name="list" tag="ul"> <!-- ul 태그를 트랜지션 그룹으로 쓰겠다. -->
      <li v-for="(todoItem, index) in todoItems" :key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" :class="{ checkBtnCompleted: todoItem.completed }" @click="toggleComplete({todoItem, index})"></i>
        <span :class="{ textCompleted: todoItem.completed } ">{{ todoItem.item }}</span>
        <span class="removeBtn" @click="removeTodo({todoItem, index})">
          <i class="fas fa-trash-alt"></i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    // 1
    // todoItems() {
    //   return this.$store.getters.storedTodoItems
    // },
    // 2
    // ...mapGetters(['storedTodoItems'])
    // 3 - 위에랑 같은데 이름이 다를때
    ...mapGetters({
      todoItems: 'storedTodoItems'
    })
  },
  methods: {
    ...mapMutations({
      removeTodo: 'removeItem',
      toggleComplete: 'toggleItem'
    })
  },
  created() {

  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;

  transition: all 1s;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

// list item transition
// .list-item {
//   display: inline-block;
//   margin-right: 10px;
// }
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
