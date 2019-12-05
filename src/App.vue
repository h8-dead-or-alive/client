<template>
  <div>
    <Homepage v-if="!main" @go-main="goMain"></Homepage>
    <Maincontent v-else></Maincontent>
  </div>
</template>

<script>
// import Navbar from "./components/Navbar.vue";
import Homepage from "./components/Homepage.vue";
import Maincontent from "./views/Maincontent.vue";

export default {
  name: "App",
  data() {
    return {
      main: false
    };
  },
  components: {
    Homepage,
    Maincontent
  },
  methods: {
    goMain() {
      this.main = true;
    }
  }
};
</script>

<style></style>
