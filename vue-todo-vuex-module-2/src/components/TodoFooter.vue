<template>
  <div id="todoFooter" class="clearAllContainer" @click="clearAll()">
    <span class="clearAllBtn">Clear All</span>
    <div>count : {{ this.$store.getters.getCount }}</div>
    <div>product : {{ this.$store.state.product }}</div>
    <!-- <div>origin: {{ originPrice }}</div>
    <div>double: {{ doublePrice }}</div>
    <div>triple: {{ triplePrice }}</div> -->
    <div></div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    originalPrice() {
      return this.$store.getters.originPrice;
    },
    doublePricE() {
      return this.$store.getters.doublePrice;
    },
    triplePrice() {
      return this.$store.getters.triplePrice
    }
  },
  methods: {
    ...mapMutations(['clearAll']),
    ...mapActions(['delayedAddCounter'])
  },
  created() {
    // this.$store.dispatch('delayedAddCounter');
    this.delayedAddCounter();
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
