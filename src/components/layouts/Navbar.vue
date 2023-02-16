<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" style="background-color: green">
      <b-navbar-brand to="/">
        <img
          :src="require('@/assets/images/wsjoo-low-resolution-logo.png')"
          alt="Kitten"
          width="150"
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about" style="outline-color: azure">
            <a>test</a>
          </b-nav-item>
          <b-nav-item to="/about" style="outline-color: azure">
            test
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbar-header',
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/fonts.scss";

nav .navbar-nav li a{
  //color: white !important;
  font-size: 30px;
}
</style>
