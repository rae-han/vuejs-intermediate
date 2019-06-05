<template>
  <div id="todoInput" class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus"></i>
    </span>

    <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
    <!-- use the modal component, pass in the prop -->
    <modal v-if="showModal" @close="showModal = false">
      <!--
        you can use custom content here to overwrite
        default content
      -->
      <h3 slot="header">
        경고! <i class="fas fa-times closeModalBtn" @click="showModal = false"></i>
      </h3>

      <div slot="body">
        할일을 입력해주세요.
      </div>
    </modal>

  </div>
</template>

<script>
import modal from './common/TheModal'

export default {
  components: {
    modal
  },
  data() {
    return {
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem === '') {
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 1000)
        return;
      }  

      this.$emit('addTodoItem', this.newTodoItem);
      this.clearInput();
    },
    clearInput() {
      this.newTodoItem = "";
    }
  }
}
</script>

<style lang="scss" scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  width: calc(100% - 58px);
  height: calc(100% - 10px);

  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}
.closeModalBtn {
  color: #42b983;
}
</style>
