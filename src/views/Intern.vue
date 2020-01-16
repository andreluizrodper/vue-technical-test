<template>
  <div class="container" v-if="content">
    <div class="breadcrumb">
      <router-link to="/">Home</router-link> >
      {{content.title}}
    </div>
    <VueLoadImage>
      <img slot="image" :src="content.multimedia[0].url" v-if="content.multimedia[0].url" />
      <img slot="preloader" class="preloader" src="@/assets/image-loader.gif" />
    </VueLoadImage>
    <strong>{{content.title}}</strong>
    <p>{{content.abstract}}</p>
    <router-link to="/">
      <small>Go back</small>
    </router-link>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image';

export default {
  components: {
    VueLoadImage,
  },
  name: 'intern',
  data() {
    return {
      content: {},
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (['toggleList'].indexOf(mutation.type) >= 0) {
        this.content = state.list[this.$route.params.index];
        this.$store.commit('toggleLoading', false);
      }
    });
    this.content = this.$store.state.list[this.$route.params.index];
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding-bottom: 30px;
  min-height: calc(100vh - 100px);
  strong {
    font-size: 18px;
    margin: 30px 0;
    display: block;
  }
  .breadcrumb {
    font-size: 12px;
    padding: 20px 15px;
  }
}
</style>
