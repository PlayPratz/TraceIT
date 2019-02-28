<template lang="html">
  <div>
    <v-btn
              fixed
              dark
              fab
              bottom
              right
              color="green accent-4"
              @click="dialog = true"
            >
              <v-icon style="height: auto">pin_drop</v-icon>
    </v-btn>

    <v-dialog
        v-model="dialog"
        max-width="1000"
      >
        <v-card>
          <v-card-title class="headline">Location</v-card-title>

          <v-card-text>
            <gmap-map v-bind:center="center" v-bind:zoom="11"
            style="height: 500px">
              <gmap-marker
              v-bind:key="index"
              v-for="(m,index) in markers"
              v-bind:position="m.position"
              v-bind:clickable="true"
              v-bind:draggable="true"
              v-bind:label="m.label"
              @click="openWindow(m)" />

              <gmap-info-window
                @closeclick="window_open=false"
                :opened="window_open"
                :position="infowindow"
                :options="{
                  pixelOffset: {
                    width: 0,
                    height: -35
                  }
                }"
              >
              <div>
              <div class="headline">{{this.infoName}}</div>
              <span class="grey--text">{{this.infoAddr}}</span>
            </div>
            </gmap-info-window>

            <gmap-polyline v-bind:path.sync="path" v-bind:options="{ strokeColor:'#008000'}">

         </gmap-polyline>
            </gmap-map>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="green darken-1"
              flat="flat"
              @click="dialog = false"
            >
              Cool
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>


  </div>
</template>

<script>
export default {
  name: "Gmap",
  data() {
    return {
      center: {lat: 19.392550, lng: 72.825293},
      path: [
            {lat: 19.392550, lng: 72.825293},
            {lat: 19.219493, lng:72.966747},
            ],
      markers: [
        {
          label: "S",
          title: "Raw Material Supplier",
          name: "Awesome Farmer",
          addr: "Some Address, In some location, In mumbai",
          position: {lat: 19.392550, lng: 72.825293}
        },
        {
          label: "T",
          title: "Trader",
          name: "Awesome Trader name",
          addr: "Some Address, In some location, In mumbai",
          position: {lat: 19.219493, lng:72.966747}

        }
      ],
      infowindow: {lat: 10, lng: 10.0},
      infoName: "",
      infoAddr: "",
      window_open: false,
      dialog: false,
    }
  },
  methods: {
    openWindow (m) {
            this.infowindow = m.position;
            this.infoName = m.name;
            this.infoAddr = m.addr;
            this.window_open = true
        }
  }
}
</script>

<style lang="css" scoped>
</style>
