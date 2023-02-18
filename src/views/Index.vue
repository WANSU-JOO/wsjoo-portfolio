<template>
  <div ref="main" class="main" id="app">
    <br>
    <vue-writer
      :array="items"
      :iterations='0'
      :eraseSpeed="50"
    />
    <b-container fluid class="p-4 bg-black">
      <b-row>
        <b-col>
          <b-img thumbnail fluid :src="require('@/assets/images/Me.jpg')" alt="Image 1"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=58" alt="Image 2"></b-img>
        </b-col>
        <b-col>
          <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=59" alt="Image 3"></b-img>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup lang="ts">
const items: string[] = ['안녕하세요. 주완수의 포트폴리오 사이트입니다.', '방문해주셔서 감사합니다. 좋은 하루 되세요!!'];
</script>

<style lang="scss">
img {
  padding: 0;
  margin: 0;
}

</style>
