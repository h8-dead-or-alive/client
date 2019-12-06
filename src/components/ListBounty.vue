<template>
  <div class="listbounty">
    <h2>List Bounties :</h2>
    <div class="detailbounty">
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
          <div style="margin-top: 0.5rem;">
            {{ formatBounty(data.item.bounty) }}
          </div>
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
          label: "Portrait"
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
      ]
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
  methods: {
    formatBounty(amount) {
      amount = String(amount);
      return amount
        .split("")
        .reverse()
        .map((val, index) => {
          let r = (amount.length - index) % 3 === 0 ? "," : "";
          r += val;
          return r;
        })
        .reverse()
        .join("");
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
