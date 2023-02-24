<template>
  <div>
    <b-navbar class="nav fixed-top" toggleable="lg" style="background-color: black">
      <b-navbar-brand to="/">
        <img
          :src="require('@/assets/images/wsjoo-low-resolution-logo.png')"
          alt="logo"
          width="150"
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="color"></b-navbar-toggle>

      <b-collapse is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">
            <a>AboutMe</a>
          </b-nav-item>
          <b-nav-item to="/about">
            <a>Project</a>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-nav-item href="https://github.com/WANSU-JOO">
        <a>GitHub</a>
      </b-nav-item>
      <b-nav-item href="https://www.instagram.com/greatjoo3_3">
        <a>Instagram</a>
      </b-nav-item>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss" scoped>

</style>
