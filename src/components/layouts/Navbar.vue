<template>
  <div>
    <b-navbar class="nav" toggleable="lg">
      <b-navbar-brand to="/">
        <img
          :src="require('@/assets/images/wsjoo-low-resolution-logo.png')"
          alt="logo"
          width="150"
        >
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" class="color"></b-navbar-toggle>

      <b-collapse id="nav-collapse" class="justify-content-between" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/about">
            <a>ABOUT</a>
          </b-nav-item>
          <b-nav-item to="/about">
            <a>PROJECT</a>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item href="https://github.com/WANSU-JOO" right>
            <i class="bi bi-github"></i>
          </b-nav-item>
          <b-nav-item href="https://www.instagram.com/greatjoo3_3" right>
            <i class="bi bi-instagram"></i>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
};
</script>

<style lang="scss" scoped>
</style>
