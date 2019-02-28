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
            <!--v-icon
              dark
              size="42"
              class="mr-3"
            >
              mdi-magnify
            </v-icon-->
            <h2 class="display-1 white--text font-weight-light">Raw Material Supplier</h2>
          </v-card-title>
          <v-container>
            <v-layout>
              <v-flex xs10>
                  <h2 class="text-lg-left blue--text text--lighten-1">Organization Name : </h2><h3 class="text-lg-left">{{chainDetails.rawMaterialSupplier.name}}</h3>
                  <br />
                  <h2 class="text-lg-left blue--text text--lighten-1">Address :</h2><h3 class="text-lg-left"> {{chainDetails.rawMaterialSupplier.address1}} <br />{{chainDetails.rawMaterialSupplier.address2}}<br />{{chainDetails.rawMaterialSupplier.address3}}</h3>

              </v-flex>
              <v-flex xs2>
                <v-icon size="64">mdi-calendar-text</v-icon>
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
                      <h2 class="text-lg-left blue--text text--lighten-1">Organization Name : </h2><h3 class="text-lg-left">{{chainDetails.rawMaterialSupplier.name}}</h3>
                      <br />
                      <h2 class="text-lg-left blue--text text--lighten-1">Address :</h2><h3 class="text-lg-left">{{chainDetails.rawMaterialSupplier.address1}}<br>{{chainDetails.rawMaterialSupplier.address2}}<br />{{chainDetails.rawMaterialSupplier.address3}}</h3>
                  </v-flex>


                <v-flex xs2>
                  <v-icon size="64">mdi-calendar-text</v-icon>
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
            The Order was placed by "Awesome Trader"<br/><br/>
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
            color="red accent-4"
            fill-dot
            right
          >
            <v-card>
              <v-card-title class="red accent-4">
              <v-icon
                dark
                size="42"
                class="mr-3"
              >
                mdi-magnify
              </v-icon>
              <h2 class="display-1 white--text font-weight-light">Manufacturer</h2>
            </v-card-title>
            <v-container>
              <v-layout>

                  <v-flex xs10>
                      <h2 class="text-lg-left blue--text text--lighten-1">Organization Name : </h2><h3 class="text-lg-left">{{chainDetails.manufacturer.name}}</h3>
                      <br />
                      <h2 class="text-lg-left blue--text text--lighten-1">Address :</h2><h3 class="text-lg-left">{{chainDetails.manufacturer.address1}}<br>{{chainDetails.manufacturer.address2}}<br />{{chainDetails.manufacturer.address3}}</h3>
                  </v-flex>


                <v-flex xs2>
                  <v-icon size="64">mdi-calendar-text</v-icon>
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
              The Order was placed by "Awesome Trader"<br/><br/>
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
              color="green accent-4"
              fill-dot
              right
            >
              <v-card>
                <v-card-title class="green accent-4">
                <v-icon
                  dark
                  size="42"
                  class="mr-3"
                >
                  mdi-magnify
                </v-icon>
                <h2 class="display-1 white--text font-weight-light">Distributor</h2>
              </v-card-title>
              <v-container>
                <v-layout>

                    <v-flex xs10>
                        <h2 class="text-lg-left blue--text text--lighten-1">Organization Name : </h2><h3 class="text-lg-left">{{chainDetails.distributor.name}}</h3>
                        <br />
                        <h2 class="text-lg-left blue--text text--lighten-1">Address :</h2><h3 class="text-lg-left">{{chainDetails.distributor.address1}}<br>{{chainDetails.distributor.address2}}<br />{{chainDetails.distributor.address3}}</h3>
                    </v-flex>


                  <v-flex xs2>
                    <v-icon size="64">mdi-calendar-text</v-icon>
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
      chainDetails: {
        rawMaterialSupplier: {
          name: "Supplier Rocks",
          address1: "Some Supplier Address in nagpur,",
          address2: "Maharastra",
          address3: "India"
        },
        trader:{
        name: "Trader Rocks",
        address1: "Some Trader Address in nagpur,",
        address2: "Maharastra",
        address3: "India"
      },
      manufacturer:{
        name: "Manufacturer Rocks",
        address1: "Some Manufacturer Address in nagpur,",
        address2: "Maharastra",
        address3: "India"
      },
      distributor:{
          name: "Distributor Rocks",
          address1: "Some Distributor Address in nagpur,",
          address2: "Maharastra",
          address3: "India"
        },
      }
    }
  },
  created() {
           this.id = this.$route.params.id;
       }
}
</script>

<style lang="css" scoped>
</style>
