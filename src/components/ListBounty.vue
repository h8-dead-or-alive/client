<template>
  <div class="listbounty">
    <h2>List Bounties :</h2>
    <div class="detailbounty">
      <!-- <b-table
        show-empty
        small
        stacked="md"
        :items="bounties"
        :fields="fields"
        :filter="filter"
        :filterIncludedFields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <img src="" alt="photo" style="position:absolute;" />
        <template v-slot:cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>
      </b-table> -->
      <b-table
        striped
        hover
        small
        stacked="md"
        :items="bounties"
        :fields="fields"
        tbody-tr-class=""
        details-td-class="py-5"
      >
        <template v-slot:cell(img)="data">
          <figure class="overflow-hidden my-auto" style="height: 35px;">
            <img :src="data.item.img" style="max-height:100%;" alt="" />
          </figure>
        </template>
        <template v-slot:cell(name)="data">
          <div style="margin-top: 0.5rem;">
            {{ data.item.name }}
          </div>
        </template>
        <template v-slot:cell(bounty)="data">
          <div style="margin-top: 0.5rem;">{{ data.item.bounty }}</div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "listbounty",
  props: ["bounties"],
  data() {
    return {
      fields: [
        {
          key: "img",
          label: "P"
        },
        {
          key: "name",
          label: "Most Wanted"
        },
        {
          key: "bounty",
          label: "Current Bounty",
          sortable: true,
          class: "text-center",
          sortDirection: "desc"
        }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "bounty",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: []
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.bounties.length;
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400i&display=swap");
.listbounty {
  font-family: "Montserrat", sans-serif;
  padding: 40px;
  width: 100%;
  height: 87vh;
  background-color: #d4c4b3;
}
table.b-table[aria-busy="true"] {
  opacity: 0.6;
}
/* 
table.b-table tr {
  text-align: center;
} */
</style>
