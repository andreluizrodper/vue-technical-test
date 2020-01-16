<template>
  <button @click="toggleSection()" v-bind:class="{'selected': selected}">
    {{ item }}
  </button>
</template>

<script>
export default {
  name: 'SectionFilterItem',
  props: ['item', 'selected'],
  methods: {
    toggleSection() {
      this.$store.commit('toggleLoading', true);
      this.$store.commit('toggleSection', this.item);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 5px;
  background: none;
  border: 1px solid #ccc;
  outline: none;
  font-size: 14px;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &.selected {
    background: #333;
    color: #fff;
    border: 1px inset #333;
  }
}
</style>
