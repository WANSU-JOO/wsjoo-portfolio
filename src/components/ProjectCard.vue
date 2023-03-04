<template>
  <div>
    <span
      class="card-img"
      v-for="(id, src) in data"
      :key="id"
      :src="src"
    >

    </span>
  </div>
</template>
<script lang="ts">
export default {
  name: 'ProjectCard',
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
