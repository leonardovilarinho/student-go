<template>
  <div id="app">

    <b-navbar variant="success" toggleable fixed>

      <b-nav-toggle target="nav_collapse"/>

      <router-link  class="navbar-brand" to="/">
        <span>Student GO</span>
      </router-link >

      <b-collapse isNav id="nav_collapse">
        <b-nav isNavBar>
          <b-nav-item>
            <router-link  to="/sobre">
              <span>Sobre</span>
            </router-link >
          </b-nav-item>
        </b-nav>
      </b-collapse>

    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

* {color: black !important;}
</style>
