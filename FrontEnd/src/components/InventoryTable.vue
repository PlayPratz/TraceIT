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
            <td class="text-xs-right">{{ props.item.name }}</td>
            <td class="text-xs-right">{{ props.item.id }}</td>
            <td class="text-xs-right">{{ props.item.batch }}</td>
            <td class="text-xs-right">{{ props.item.quantity }}</td>
          <td> <v-checkbox v-model="right" label="verified" hide-details></v-checkbox></td>
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
import io from 'socket.io-client';
export default {
  name: 'InventoryTable',
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'PRODUCTS',
            align: 'right',
            sortable: false,
            value: 'name'
          },
          { text: 'ID', align: 'right', value: 'id' },
          { text: 'BATCH NO', align: 'right', value: 'batch' },
          { text: 'QUANTITY', align: 'right', value: 'quantity' },
        ],
        products: [
          {
            name: 'Knorr Soups',
            id: 159,
            batch: 6,
            quantity: 24,

          }
        ],
        packingid: "",
        socket : io('192.168.43.149:8081')
      }
    },
    mounted() {
     this.socket.on('message', (data) => {
          console.log(data);
          console.log(data.products);
         this.products = data.products;
         this.packingid = data.packingid;
     });
   }
}

</script>

<style lang="css" scoped>

</style>
