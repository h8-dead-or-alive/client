<template>
  <div class="maincontent">
    <Navbar @go-homepage="goHomePage"></Navbar>
    <Content></Content>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Content from "../components/Content.vue";

export default {
  name: "navbar",
  components: {
    Navbar,
    Content
  },
  methods: {
    goHomePage() {
      this.$emit("go-homepage");
    }
  },
  created() {
    if (localStorage.getItem("gomain")) {
      this.$emit("go-main");
    } else {
      this.$emit("go-homepage");
    }
  }
};
</script>

<style scoped>
</style>
