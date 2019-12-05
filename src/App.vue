<template>
  <div>
    <Homepage v-if="!main" @go-main="goMain"></Homepage>
    <Maincontent
      v-else
      @go-homepage="goHomePage"
      @go-main="main = true"
    ></Maincontent>
  </div>
</template>

<script>
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
      localStorage.setItem("gomain", "mainnow");
    },
    goHomePage() {
      this.main = false;
      localStorage.removeItem("gomain");
    }
  },
  created() {
    if (localStorage.getItem("gomain")) {
      this.main = true;
    } else {
      this.main = false;
    }
  }
};
</script>

<style></style>
