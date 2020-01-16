<template>
  <div>
    <SectionFilter :selected="selectedSection" />
    <HighLight
      :content="item"
      :index="index"
      :section="selectedSection"
      v-for="(item, index) in highlights"
      :key="index"
    />
    <ListItem
      :content="item"
      :index="index"
      :section="selectedSection"
      v-for="(item, index) in items"
      :key="index"
    />
    <button v-if="hasMore" @click="more()">Load more</button>
  </div>
</template>

<script>
import SectionFilter from '@/components/SectionFilter.vue';
import HighLight from '@/components/HighLight.vue';
import ListItem from '@/components/ListItem.vue';

export default {
  name: 'home',
  components: {
    SectionFilter,
    HighLight,
    ListItem,
  },
  data() {
    return {
      highlights: [],
      items: [],
      pagesShown: 10,
      actualPage: 1,
      hasMore: false,
      selectedSection: this.$store.state.section,
    };
  },
  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (['toggleList'].indexOf(mutation.type) >= 0) {
        this.loadList();
      }
      if (['toggleSection'].indexOf(mutation.type) >= 0) {
        this.items = [];
        this.highlights = [];
        this.selectedSection = state.section;
        this.$store.dispatch('getStories');
        this.actualPage = 1;
      }
    });
    this.loadList();
  },
  methods: {
    more() {
      const start = this.actualPage * this.pagesShown;
      const end = start + this.pagesShown;
      this.actualPage += 1;
      this.hasMore = this.$store.state.list.length > this.actualPage * this.pagesShown;
      this.items.push(...this.$store.state.list.slice(start, end));
    },
    loadList() {
      this.highlights = this.$store.state.list.slice(0, 3);
      this.items = this.$store.state.list.slice(4, 10);
      this.hasMore = this.$store.state.list.length > this.actualPage * this.pagesShown;
      this.$store.commit('toggleLoading', false);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  padding-bottom: 20px;
  button {
    margin: 0 auto;
    font-size: 16px;
    background: #000;
    color: #fff;
    border: 1px solid #000;
    transition: all 0.3s;
    padding: 15px;
    width: 200px;
    display: block;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #000;
    }
  }
}
</style>
