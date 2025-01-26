<template>
  <div id="app">
    <Header />
    <Home />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "@/views/Home.vue";
export default {
  components: {
    Header,
    Home,
  },
};
</script>
<style>
#app {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
