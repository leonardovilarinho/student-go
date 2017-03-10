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

    <b-navbar class="footer" variant="success" toggleable fixed>

      <b-nav-toggle target="nav_collapse"/>

      <router-link  class="navbar-brand" to="/">
        <span>Student GO 2</span>
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

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
