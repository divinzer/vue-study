<template>
  <div id="app">
    <Header></Header>
    <hr />
    <div class="container">
      <div class="nav">
        <Nav v-show="true"></Nav>
      </div>
      <hr />
      <div class="contents" v-if="true">
        <section>
          <router-view></router-view>
        </section>
      </div>
      <hr />
    </div>
    <Footer :title="'Copyright'"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/container/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Nav,
    Footer
  }
};
</script>

<style lang="scss">
@import "~@/assets/styles/App.scss";
</style>
