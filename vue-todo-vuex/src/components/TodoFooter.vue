<template>
  <div id="todoFooter" class="clearAllContainer" @click="clearTodo()">
    <span class="clearAllBtn">Clear All</span>
    <div>count : {{ this.$store.getters.getCount }}</div>
    <div>product : {{ this.$store.state.product }}</div>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$store.commit('clearAll');
    }
  },
  created() {
    // this.$store.dispatch('delayedAddCounter');
  }
}
</script>

<style lang="scss" scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}
</style>
