<template>
  <div>
    <router-link :to="`/${index},${section},${slugfy(content.title)}`" @click="selectItem()">
      <VueLoadImage>
        <img slot="image" :src="content.multimedia[0].url" v-if="content.multimedia[0].url" />
        <img slot="preloader" class="preloader" src="@/assets/image-loader.gif" />
      </VueLoadImage>
      <div>
        <strong>{{content.title}}</strong>
        <p>{{content.abstract}}</p>
        <small>See more</small>
      </div>
    </router-link>
  </div>
</template>

<script>
import VueLoadImage from 'vue-load-image';

export default {
  components: {
    VueLoadImage,
  },
  name: 'HighLight',
  props: ['content', 'index', 'section'],
  methods: {
    slugfy(text) {
      const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;';
      const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------';
      const p = new RegExp(a.split('').join('|'), 'g');

      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(p, c => b.charAt(a.indexOf(c)))
        .replace(/&/g, '-and-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
    },
    selectItem() {
      this.$store.commit('toggleIntern', this.content);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 15px 0 0;
}
strong {
  font-size: 18px;
  margin: 20px 0 0;
}
small {
  display: block;
}
</style>
