<template>
  <div class="maincontent">
    <Navbar @go-homepage="goHomePage"></Navbar>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  name: "navbar",
  components: {
    Navbar
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

<style></style>
