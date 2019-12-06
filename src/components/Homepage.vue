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

      <div class="layer" data-depth="0.5">
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
        <img src="../assets/img/homepage/kid.jpg" width="150px" height="200px" alt="kid" id="kid" />
      </div>
      <div class="layer" data-depth="0.4">
        <img src="../assets/img/homepage/ace.png" width="150px" height="200px" alt="ace" id="ace" />
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
        <img src="../assets/img/homepage/law.jpg" width="150px" height="200px" alt="law" id="law" />
      </div>
    </div>
  </div>
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "homepage",
  data() {
    return {};
  },
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
  transition: 0.5s;
}
#luffy:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#zoro {
  left: 0px;
  top: 0px;
  position: relative;
  transition: 0.5s;
}

#zoro:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#usop {
  position: relative;
  left: 1150px;
  transition: 0.5s;
}

#usop:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#sanji {
  position: relative;
  top: 450px;
  left: 20px;
  transition: 0.5s;
}

#sanji:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#nami {
  position: relative;
  left: 1150px;
  top: 450px;
  transition: 0.5s;
}

#nami:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#chopper {
  position: relative;
  left: 275px;
  top: 113px;
  transition: 0.5s;
}

#chopper:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#robbin {
  position: relative;
  left: 800px;
  transition: 0.5s;
}

#robbin:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#franky {
  position: relative;
  left: 800px;
  top: 300px;
  transition: 0.5s;
}

#franky:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#brook {
  position: relative;
  left: 300px;
  top: 250px;
  transition: 0.5s;
}

#brook:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#kuma {
  position: relative;
  left: 430px;
  top: 430px;
  transition: 0.5s;
}

#kuma:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}
#kid {
  position: relative;
  left: 700px;
  top: 500px;
  transition: 0.5s;
}

#kid:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#ace {
  position: relative;
  left: 920px;
  top: 250px;
  transition: 0.5s;
}

#ace:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#bellamy {
  position: relative;
  top: 300px;
  left: 100px;
  transition: 0.5s;
}

#bellamy:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}

#law {
  position: relative;
  left: 500px;
  transition: 0.5s;
}

#law:hover {
  cursor: pointer;
  transform: scale(1.1);
  transition: 0.5s;
}
</style>
