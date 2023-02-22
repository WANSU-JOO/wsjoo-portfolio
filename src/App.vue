<template>
  <div id="app">
    <b-row>
      <Navbar />
    </b-row>
    <b-row>
      <body class="main-contents">
        <router-view/>
      </body>
    </b-row>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/layouts/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
//#app {
//  font-family: Avenir, Helvetica, Arial, sans-serif;
//  -webkit-font-smoothing: antialiased;
//  -moz-osx-font-smoothing: grayscale;
//  text-align: center;
//  color: #2c3e50;
//}
nav {
  padding: 0px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
