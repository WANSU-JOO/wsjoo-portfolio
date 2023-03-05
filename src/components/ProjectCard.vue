<template>
  <div>
    <span
      class="card-img"
      :key="data.id"
      :src="data.src"
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
  methods: {
    getSource() {
      console.log(data, 'data');
    },
  },
};
</script>
