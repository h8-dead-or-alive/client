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
      <b-navbar-brand href="#" @click="goHome">Home</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Menu" right>
            <b-dropdown-item href="" v-b-modal.modal-add-bounty
              >Add New Bounty</b-dropdown-item
            >
            <b-dropdown-item @click="goList" href="#"
              >List Bounty</b-dropdown-item
            >
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
    <b-modal
      id="modal-add-bounty"
      title="Add New Bounte"
      centered
      @ok="onAddNewBounty"
    >
      <b-form-file
        v-model="file"
        class="overflow-hidden"
        :state="Boolean(file)"
        accept="image/*"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
      <figure>
        <b-img :src="img" fluid></b-img>
      </figure>
      <b-form-input
        v-model="name"
        placeholder="Suspect Name"
        v-if="img"
      ></b-form-input>
    </b-modal>
  </div>
</template>

<script>
import db from "../../config/firebase";
import axios from "axios";
const baseURL = "http://localhost:3000";

export default {
  name: "navbar",
  data() {
    return {
      file: null,
      img: "",
      name: ""
    };
  },
  methods: {
    goHomePage() {
      this.$emit("go-homepage");
    },
    goList() {
      this.$emit("go-list");
    },
    goHome() {
      this.$emit("go-home");
    },
    onAddNewBounty() {
      db.collection("bounties").add({
        name: this.name,
        img: this.img,
        bounty: 0
      });
      // this.file = null;
    }
  },
  watch: {
    file(val) {
      const formData = new FormData();
      formData.append("image", val);
      axios({
        method: "post",
        url: `${baseURL}/image`,
        data: formData
      })
        .then(({ data }) => {
          this.img = data.image;
        })
        .catch(err => console.log(err));
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
