<template>
  <div ref="main" class="main" id="app">
    <header class="position-absolute">
      <vue-writer
        :array="hello"
        :iterations='1'
        :eraseSpeed="50"
        :typeSpeed="100"
      />
    </header>
    <main-image></main-image>
  </div>
</template>
<script setup lang="ts">
import MainImage from '@/components/MainImage.vue';

const hello: string[] = ['안녕하세요. 주완수의 포트폴리오 사이트입니다.\nVueJs / JavaScript / TypeScript / SpringBoot'];
</script>

<style lang="scss">
img {
  padding: 0;
  margin: 0;
}

</style>
