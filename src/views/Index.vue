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
    <main-image />
    <AboutMe></AboutMe>
    <project-card :data="data"></project-card>
  </div>
</template>
<script setup lang="ts">
import MainImage from '@/components/MainImage.vue';
import AboutMe from '@/components/AboutMe.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import dataSource from '@/assets/data';

const hello: string[] = ['안녕하세요. 주완수의 포트폴리오 사이트입니다.\nVueJs / JavaScript / TypeScript / SpringBoot'];
const data: object = dataSource;

</script>

<style lang="scss">

</style>
