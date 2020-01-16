<template>
  <div>
    <router-link :to="`/${index},${section},${slugfy(content.title)}`" @click="selectItem()">
      <strong>{{content.title}}</strong>
      <p>{{content.abstract}}</p>
      <small>See more</small>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
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
  },
};
</script>

<style lang="scss" scoped>
div {
  border-top: 1px solid #000;
  padding: 20px 0;
}
</style>
