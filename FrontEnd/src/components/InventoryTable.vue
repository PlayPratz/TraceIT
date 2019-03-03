<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-card>
        <v-card-title>
          Inventory
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="products"
          :search="search"
        >
          <template slot="items" slot-scope="props">
            <td>{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.batch }}</td>
            <td class="text-xs-right">{{ props.item.quantity }}</td>

          </template>
          <v-alert slot="no-results" :value="true" color="error" icon="warning">
            Your search for "{{ search }}" found no results.
          </v-alert>
        </v-data-table>
      </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'InventoryTable',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'PRODUCTS',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'ID', value: 'id' },
          { text: 'BATCH NO', value: 'batch' },
          { text: 'QUANTITY', value: 'quantity' },

        ],
        products: [
          {
            name: 'Knorr Soups',
            id: 159,
            batch: 6,
            quantity: 24,

          },
          {
            name: 'Brook Bond Bru',
            id: 22,
            batch: 62,
            quantity: 24,

          },
          {
            name: 'Lipton',
            id: 44,
            batch: 7,
            quantity: 24,

          },
          {
            name: 'Pepsodent',
            id: 9,
            batch: 2,
            quantity: 24,

          },
          {
            name: 'Close up',
            id: 14,
            batch: 2,
            quantity: 44,

          },
          {
            name: 'Dove',
            id: 1,
            batch: 3,
            quantity: 22,

          },


        ],
      }
    }
}
</script>

<style lang="css" scoped>

</style>
