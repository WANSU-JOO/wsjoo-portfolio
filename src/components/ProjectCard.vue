<template>
  <div>
    <div class="page-header">
      {{ data.data.id }}
    </div>
    <span
      class="card-img"
      :key="data.data.id"
      :src="data.data.src"
    >

    </span>
  </div>
</template>
<script lang="ts">
import data from '@/assets/data';

export default {
  name: 'ProjectCard',
  props: {
    data: {
      id: String,
      src: String,
    },
  },
  data() {
    return {
      dataSource: Object,
    };
  },
  setup() {
    console.log(data.data, 'data');
  },
  methods: {
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/components/_project-card.scss";
</style>
