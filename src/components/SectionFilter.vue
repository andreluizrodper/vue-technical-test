<template>
  <div class="container" v-bind:class="{'enable': filterEnable}">
    <strong @click="enableFilters()">Filter</strong>
    <div class="filter-holder" @click="enableFilters()">
      <SectionFilterItem
        :selected="item == selected"
        :item="item" v-for="(item, index) in sections"
        v-bind:key="index"/>
    </div>
  </div>
</template>

<script>
import SectionFilterItem from '@/components/SectionFilterItem.vue';

export default {
  components: {
    SectionFilterItem,
  },
  props: ['selected'],
  name: 'SectionFilter',
  data() {
    return {
      filterEnable: false,
      filter: 'home',
      sections: [
        'arts', 'automobiles', 'books', 'business', 'fashion', 'food', 'health', 'home', 'insider', 'magazine', 'movies', 'national', 'nyregion', 'obituaries', 'opinion', 'politics', 'realestate', 'science', 'sports', 'sundayreview', 'technology', 'theater', 'tmagazine', 'travel', 'upshot', 'world',
      ],
    };
  },
  methods: {
    enableFilters() {
      this.filterEnable = !this.filterEnable;
    },
  },
};
</script>

<style lang="scss" scoped>
div.container {
  display: flex;
  flex-wrap: wrap;
  padding: 0 15px;
  strong {
    padding: 0;
    margin: 20px 0 16px;
    font-size: 16px;
    width: 100%;
    @media(max-width: 789px) {
      cursor: pointer;
      &:after {
        content: ' ';
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #000;
        margin-left: 10px;
        vertical-align: middle;
        display: inline-block;
      }
    }
  }
  @media(max-width: 789px) {
    .filter-holder {
      display: none;
    }
    &.enable {
      .filter-holder {
        display: block;
      }
      strong:after {
        border-top: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid black;
      }
    }
  }
}
</style>
