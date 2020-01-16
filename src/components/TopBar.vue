<template>
  <div id="top-bar">
    <div class="wrapper">
      <div class="content">
        <h1>Vue Test</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
};
</script>

<style lang="scss" scoped>
#top-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  .content {
    padding: 0 15px;
    display: flex;
    .utils {
      flex-grow: 1;
    }
  }
}
</style>
