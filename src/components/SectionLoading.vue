<template>
  <div v-if="isLoading" class="loading">
    <div class="holder">
      <div class="dot-flashing"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionLoading',
  data() {
    return {
      isLoading: this.$store.state.isLoading,
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (['toggleLoading'].indexOf(mutation.type) >= 0) {
        this.isLoading = state.isLoading;
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9);
  z-index: 10000;
  .holder {
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -5px 0 0 -15px;
    .dot-flashing {
      position: relative;
      width: 10px;
      height: 10px;
      border-radius: 5px;
      background-color: #9880ff;
      color: #9880ff;
      animation: dotFlashing 1s infinite linear alternate;
      animation-delay: .5s;
      &::before,
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
      }
      &::before {
        left: -15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #9880ff;
        color: #9880ff;
        animation: dotFlashing 1s infinite alternate;
        animation-delay: 0s;
      }
      &::after {
        left: 15px;
        width: 10px;
        height: 10px;
        border-radius: 5px;
        background-color: #9880ff;
        color: #9880ff;
        animation: dotFlashing 1s infinite alternate;
        animation-delay: 1s;
      }
    }
  }
}
</style>
