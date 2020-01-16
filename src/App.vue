<template>
  <div id="app">
    <TopBar />
    <div class="wrapper shadow">
      <router-view />
    </div>
    <SectionLoading />
  </div>
</template>

<script>
import SectionLoading from '@/components/SectionLoading.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  components: {
    TopBar,
    SectionLoading,
  },
  mounted() {
    this.$store.dispatch('getStories');
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 35px 0 0;
  font: 14px arial;
  background: #ccc;
}
a {
  text-decoration: none;
  color: #000;
}
p,
strong {
  padding: 0 15px;
  display: block;
}
.wrapper {
  max-width: 980px;
  width: 100%;
  background: #fff;
  margin: 0 auto;
  &.shadow {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  }
}
img {
  max-width: 100%;
}
small {
  display: block;
  padding: 0 15px;
}
</style>
