<template>
  <div class="homepage">
    <div data-pointer-events="true" data-relative-input="true" id="scene">
      <div class="layer" data-depth="0.5">
        <img
          @click="goMainContent"
          src="../assets/img/homepage/luffy.jpg"
          width="150px"
          height="200px"
          alt="luffy"
          id="luffy"
        />
      </div>

      <div id="zoro" class="layer" data-depth="1">
        <img
          src="../assets/img/homepage/zoro.jpg"
          width="150px"
          height="200px"
          alt="zoro"
          id="zoro"
        />
      </div>
      <div class="layer" data-depth="0.7">
        <img
          src="../assets/img/homepage/nami.jpg"
          width="150px"
          height="200px"
          alt="nami"
          id="nami"
        />
      </div>
      <div class="layer" data-depth="0.2">
        <img
          src="../assets/img/homepage/sanji.jpg"
          width="150px"
          height="200px"
          alt="sanji"
          id="sanji"
        />
      </div>
      <div class="layer" data-depth="0.3">
        <img
          src="../assets/img/homepage/usop.jpg"
          width="150px"
          height="200px"
          alt="usop"
          id="usop"
        />
      </div>
      <div class="layer" data-depth="0.4">
        <img
          src="../assets/img/homepage/chopper.jpg"
          width="150px"
          height="200px"
          alt="chopper"
          id="chopper"
        />
      </div>
      <div class="layer" data-depth="0.9">
        <img
          src="../assets/img/homepage/robbin.jpg"
          width="150px"
          height="200px"
          alt="robbin"
          id="robbin"
        />
      </div>
      <div class="layer" data-depth="0.1">
        <img
          src="../assets/img/homepage/franky.jpg"
          width="150px"
          height="200px"
          alt="franky"
          id="franky"
        />
      </div>
      <div class="layer" data-depth="1.5">
        <img
          src="../assets/img/homepage/brook.jpg"
          width="150px"
          height="200px"
          alt="brook"
          id="brook"
        />
      </div>
      <div class="layer" data-depth="1">
        <img
          src="../assets/img/homepage/kuma.jpg"
          width="150px"
          height="200px"
          alt="kuma"
          id="kuma"
        />
      </div>
      <div class="layer" data-depth="0.3">
        <img
          src="../assets/img/homepage/kid.jpg"
          width="150px"
          height="200px"
          alt="kid"
          id="kid"
        />
      </div>
      <div class="layer" data-depth="0.4">
        <img
          src="../assets/img/homepage/ace.png"
          width="150px"
          height="200px"
          alt="ace"
          id="ace"
        />
      </div>
      <div class="layer" data-depth="0.1">
        <img
          src="../assets/img/homepage/bellamy.jpeg"
          width="150px"
          height="200px"
          alt="bellamy"
          id="bellamy"
        />
      </div>
      <div class="layer" data-depth="0.3">
        <img
          src="../assets/img/homepage/law.jpg"
          width="150px"
          height="200px"
          alt="law"
          id="law"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "homepage",
  methods: {
    goMainContent() {
      console.log("masuk");
      this.$emit("go-main");
    }
  },
  mounted() {
    var scene = document.getElementById("scene");
    var parallax = new Parallax(scene);
  }
};
</script>

<style scoped>
.homepage {
  padding: 0px;
  margin: 0px;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/homepage/backgroundop2.jpg");
  overflow: hidden;
  background-attachment: fixed;
}

#luffy {
  position: relative;
  left: 550px;
  top: 250px;
}
#luffy:hover {
  cursor: pointer;
}

#zoro {
  position: relative;
}

#usop {
  position: relative;
  left: 1150px;
}

#sanji {
  position: relative;
  top: 450px;
  left: 20px;
}

#nami {
  position: relative;
  left: 1150px;
  top: 450px;
}

#chopper {
  position: relative;
  left: 275px;
  top: 113px;
}

#robbin {
  position: relative;
  left: 800px;
}

#franky {
  position: relative;
  left: 800px;
  top: 300px;
}

#brook {
  position: relative;
  left: 300px;
  top: 250px;
}

#kuma {
  position: relative;
  left: 430px;
  top: 430px;
}
#kid {
  position: relative;
  left: 700px;
  top: 500px;
}
#ace {
  position: relative;
  left: 920px;
  top: 250px;
}

#bellamy {
  position: relative;
  top: 300px;
  left: 100px;
}
#law {
  position: relative;
  left: 500px;
}
</style>
