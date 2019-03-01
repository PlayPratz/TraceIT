<template lang="html">
  <div id="app">
    <v-app id="inspire">
      <v-container style="max-width: 600px;">
        <v-timeline dense clipped>
        <v-timeline-item
          color="amber darken-4"
          fill-dot
          right
        >
        <v-card>
          <v-card-title class="amber darken-4">
            <h2 class="display-1 white--text font-weight-light">Raw Material Supplier</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs10>
                  <h2 class="text-lg-left blue--text text--lighten-1">Organization Name : </h2><h3 class="text-lg-left">{{chainDetails.rawMaterialSupplier.name}}</h3>
                  <br />
                  <h2 class="text-lg-left blue--text text--lighten-1">Address :</h2><h3 class="text-lg-left"> {{chainDetails.rawMaterialSupplier.address1}} <br />{{chainDetails.rawMaterialSupplier.address2}}<br />{{chainDetails.rawMaterialSupplier.address3}}</h3>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-timeline-item>

      <v-timeline-item
        class="mb-3"
        icon-color="grey lighten-2"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs7>
            The Order was placed by "Awesome rawMaterialSupplier"<br/><br/>
            <v-btn small color="primary" dark @click="salesDialog = true">Sales Order</v-btn>
          </v-flex>
          <v-flex xs5 text-xs-right>15:26 EDT</v-flex>
        </v-layout>
      </v-timeline-item>



          <!-- Dialog for Sales Order-->
      <v-dialog
      v-model="salesDialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline text-lg-left blue--text">Sales Order</v-card-title>

        <v-card-text class="text-lg-left">
          <h3>Payment ID: 1001234<br />
          Material Name: Coffee beans<br />
          Quantity: 10kg<br />
          Amount: 10500</h3>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="salesDialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


      <v-timeline-item
        class="mb-3"
        icon-color="grey lighten-2"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs7>
            Order is packed and ready to be shipped.<br/><br/>
            <v-btn small color="primary" dark @click="packTicket = true">Packing Ticket</v-btn>
          </v-flex>
          <v-flex xs5 text-xs-right>18:45 IST</v-flex>
        </v-layout>
      </v-timeline-item>

      <!-- Dialog for Sales Order-->
      <v-dialog
        v-model="packTicket"
        max-width="290"
      >
        <v-card >
          <v-card-title class="headline  text-lg-left blue--text">Packing Ticket</v-card-title>

          <v-card-text class="text-lg-left">
            <h3>Packment ID: 12345<br />
            Material Name: Coffee beans<br />
            Quantity: 10kg<br />
            Delivery Date: 12/02/1999</h3>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="packTicket = false"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-timeline-item
        class="mb-3"
        icon-color="grey lighten-2"
        small
      >
        <v-layout justify-space-between>
          <v-flex xs7>
            Order has arrived at "Awesome Place".<br /><br />
            <v-btn small color="primary" dark @click="shipTicket = true">Shipment Ticket</v-btn>
          </v-flex>
          <v-flex xs5 text-xs-right>22:45 IST</v-flex>
        </v-layout>
      </v-timeline-item>


            <!-- Dialog for Sales Order-->
      <v-dialog
        v-model="shipTicket"
        max-width="290"
      >
        <v-card>
          <v-card-title class="headline  text-lg-left blue--text">Shipment Ticket</v-card-title>

          <v-card-text class="text-lg-left">
            <h3>Packment ID: 12345<br />
            Material Name: Coffee beans<br />
            Quantity: 10kg<br />
            Holes: false<br />
            Condensation: false<br />
            Insect Activity: false<br />
            Delivery Date: 12/02/1999</h3>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn
              color="green darken-1"
              flat="flat"
              @click="shipTicket = false"
            >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>



          <v-timeline-item
            color="yellow accent-4"
            fill-dot
            right
          >
            <v-card>
              <v-card-title class="yellow accent-4">
              <v-icon
                dark
                size="42"
                class="mr-3"
              >
                mdi-magnify
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">rawMaterialSupplier</h2>
            </v-card-title>
            <v-container>
              <v-layout>

                  <v-flex xs10>
                      <h2 class="text-lg-left blue--text text--lighten-1">Organization Name : </h2><h3 class="text-lg-left">{{chainDetails.trader.name}}</h3>
                      <br />
                      <h2 class="text-lg-left blue--text text--lighten-1">Address :</h2><h3 class="text-lg-left">{{chainDetails.trader.address1}}<br>{{chainDetails.trader.address2}}<br />{{chainDetails.trader.address3}}</h3>
                      <v-data-table
                        :headers="headers"
                        :items="traders"
                        class="elevation-1"
                      >
                        <template slot="items" slot-scope="props">
                          <tr @click="updateTrader(props.index)">
                            <td class="text-xs-left">{{ props.item.id }}</td>
                            <td class="text-xs-left">{{ props.item.name }}</td>
                          </tr>
                        </template>
                      </v-data-table>
                  </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-timeline-item>
        </v-timeline>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "ProductChain",
  data() {
    return {
      id: 0,
      salesDialog: false,
      packTicket: false,
      shipTicket: false,
      //Big Card Details
      chainDetails: {
        rawMaterialSupplier: {
          id: "123456",
          name: "Supplier Rocks",
          address1: "Some Supplier Address in nagpur,",
          address2: "Maharastra",
          address3: "India"
        },
        trader: {
          id: "123456",
          name: "Supplier Rocks",
          address1: "Some Supplier Address in nagpur,",
          address2: "Maharastra",
          address3: "India"
        }
      },
      //Small Card Details
      
      //Table Details
      headers: [
        {
          text: 'ID',
          sortable: false,
          value: 'id'
        },
        {
          text: 'Name',
          sortable: false,
          value: 'name'
        }
      ],
      traders: [
        {
          id: "2016",
          name: "Calden",
          address1: "Some Supplier Address in nagpur,",
          address2: "Maharastra",
          address3: "India"
        }
      ]
    }
  },
  created() {
           this.id = this.$route.params.id;
       },
  methods: {
    updateTrader(index) {
        this.chainDetails.trader = this.traders[index];
    }
  }
}
</script>

<style lang="css" scoped>
</style>
