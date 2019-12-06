<template>
  <div class="content">
    <div id="content-wrapper">
      <b-card-group
        id="card-list"
        v-for="bounty in bounties"
        :key="bounty.name"
        deck
      >
        <div id="card">
          <img
            :src="bounty.img"
            width="287px"
            height="210px"
            alt="test"
            id="photo"
          />
          <h1 id="name">{{ bounty.name }}</h1>
          <h2 id="bounty">{{ bounty.bounty }}</h2>
          <button id="btn-bounties" @click="addBountyAmount(bounty)"></button>

          <a
            id="share-buttons"
            :href="`https://twitter.com/intent/tweet?url=${bounty.img}`"
          >
            <img
              src="https://simplesharebuttons.com/images/somacro/twitter.png"
              alt="Twitter"
            />
          </a>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
import db from "../../config/firebase";

export default {
  name: "content",
  props: ["bounties"],
  data() {
    return {};
  },
  methods: {
    addBountyAmount(bounty) {
      db.collection("bounties").doc(bounty.id);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");
.content {
  font-family: "Playfair Display", serif;
}

#share-buttons img {
  width: 35px;
  padding: 5px;
  border: 0;
  box-shadow: 0;
  display: inline;
  z-index: 5;
  margin-top: 1px;
  right: 1px;
}

.twitter-share-button {
  position: absolute;
  right: 2px;
}

#btn-bounties {
  width: 35px;
  height: 35px;
  left: 80px;
  position: absolute;
  z-index: 4;
  top: 530px;
  opacity: 0;
}

#card-list:hover #btn-bounties {
  top: 420px;
  left: 55px;
}

#photo {
  position: relative;
  top: 106px;
}

#bounty {
  position: absolute;
  z-index: 3;
  bottom: 35px;
  text-transform: uppercase;
}

#name {
  position: absolute;
  z-index: 2;
  text-transform: uppercase;
}

#card-list #name {
  bottom: 80px;
}

#content-wrapper {
  padding: 25px 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  color: #544125;
}

#card-list:hover {
  transition: 0.5s;
  transform: scale(1.2);
}

#card {
  margin-bottom: 25px;
  width: 400px;
  height: 500px;
  background-image: url("../assets/img/poster.png");
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-size: contain;
  display: flex;
  justify-content: center;
  position: relative;
}
</style>
