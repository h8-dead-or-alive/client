<template>
  <div class="maincontent">
    <Navbar
      @go-homepage="goHomePage"
      @go-list="goList = true"
      @go-home="goList = false"
    ></Navbar>
    <Content :bounties="bounties" v-if="!goList"></Content>
    <Listbounty v-if="goList"></Listbounty>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Content from "../components/Content.vue";
import Listbounty from "../components/ListBounty.vue";

export default {
  name: "navbar",
  components: {
    Navbar,
    Content,
    Listbounty
  },
  data() {
    return {
      goList: false
    };
  },
  props: ["bounties"],
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

<style scoped></style>
