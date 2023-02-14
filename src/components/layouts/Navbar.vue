<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" style="background-color: black">
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
          <b-nav-item to="/about" style="outline-color: azure"><a>Link</a></b-nav-item>
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
nav .navbar-nav li a{
  color: white !important;
  font-size: 30px;
}
</style>
