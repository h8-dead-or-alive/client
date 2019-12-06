<template>
  <div class="content">
    <div id="content-wrapper">
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

#content-wrapper {
  padding: 25px 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: red;
  width: 100%;
  justify-content: space-between;
}

#card-list {
  transition: all 0.5s ease-in-out;
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
}

#card-content {
}
</style>