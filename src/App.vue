<template>
  <div>
    <Homepage v-if="!main" @go-main="goMain"></Homepage>
    <Maincontent
      :bounties="bounties"
      v-else
      @go-homepage="goHomePage"
      @go-main="main = true"
    ></Maincontent>
  </div>
</template>

<script>
import Homepage from "./components/Homepage.vue";
import Maincontent from "./views/Maincontent.vue";
import db from "../config/firebase";

export default {
  name: "App",
  data() {
    return {
      main: false,
      bounties: []
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
    db.collection("bounties").onSnapshot(querySnapshot => {
      var cities = [];
      const data = querySnapshot.docs.map(doc => doc.data());
      // console.log(data);
      data.sort((a, b) => a.bounty - b.bounty);
      this.bounties = data;
    });
  }
};
</script>

<style scoped></style>
