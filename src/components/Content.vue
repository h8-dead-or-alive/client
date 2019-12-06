<template>
  <div class="content">
    <div id="content-wrapper">
      <b-card-group id="card-list" deck>
        <div id="card">
          <img
            src="../assets/img/upload/test1.jpg"
            width="287px"
            height="210px"
            alt="test"
            id="photo"
          />
          <h1 id="name">Edwin Satya</h1>
          <h2 id="bounty">500.000.000</h2>
        </div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>

      <b-card-group id="card-list" deck>
        <div id="card"></div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "content",
  methods: {}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Playfair+Display&display=swap");
.content {
  font-family: "Playfair Display", serif;
}

#photo {
  position: relative;
  top: 106px;
}

#bounty {
  position: absolute;
  z-index: 3;
  top: 528px;
  text-transform: uppercase;
}

#card-list:hover #bounty {
  top: 416px;
}

#name {
  position: absolute;
  z-index: 2;
  text-transform: uppercase;
}

#card-list:hover #name {
  top: 365px;
  /* transition: 0.5s; */
}

#card-list #name {
  top: 475px;
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

#card-list {
  /* transition: all 0.5s ease-in-out; */
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
}

#card-content {
}
</style>
