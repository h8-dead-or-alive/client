<template>
  <div id="navbartop">
    <b-navbar toggleable="lg" type="light" variant="light">
      <b-navbar-brand href="#"
        ><img
          src="../assets/img/logohome.png"
          width="150px"
          height="60px"
          alt="logonavbar"
          @click="goHomePage"
      /></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item href="#">Add New Bounty</b-dropdown-item>
            <b-dropdown-item href="#">List Bounty</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navbar",
  methods: {
    goHomePage() {
      this.$emit("go-homepage");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Roboto:500i&display=swap");
#navbartop {
  font-family: "Roboto", sans-serif;
}
</style>
