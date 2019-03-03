<template lang="html">
  <div id="app">
  <v-app id="inspire">
    <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>




    <v-container
         id="grid"
         fluid
         grid-list-sm
         tag="section"
       >
         <v-layout row wrap>
           <v-flex tag="h1" class="headline">ABOUT US...</v-flex>
           <v-flex d-flex xs12 order-xs5>
             <v-layout column>
               <v-flex>
                 <v-card flat>
                   <v-card-text>{{ about }}</v-card-text>
                 </v-card>
               </v-flex>
               <v-flex>
                 <v-card flat>
                   <v-card-text>{{ about }}</v-card-text>
                 </v-card>
               </v-flex>
             </v-layout>
           </v-flex>
         </v-layout>
       </v-container>


<h1 class="text-sm-left">MEET THE TEAM</h1>
    <v-container


          grid-list-lg

        >

            <v-layout >
              <v-flex xs6>
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    centre
                    height="125"
                    width="125"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-flex>

              <v-flex xs6>
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    height="125"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-flex>

              <v-flex xs6>
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    height="125"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>





            <v-layout>
              <v-flex xs6>
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    height="125"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-flex>


              <v-flex xs6>
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    height="125"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-flex>


              <v-flex xs6>
                <v-card>
                  <v-img
                    src="https://picsum.photos/350/165?random"
                    height="125"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-flex>
            </v-layout>

        </v-container>







        <v-footer
              dark

            >
              <v-card
                class="flex"
                flat
                tile
              >
                <v-card-title class="teal">
                  <v-card-text>

                      <v-flex tag="h1" class="headline">CONTACT US...</v-flex>
                  </v-card-text>


                  <strong class="subheading">Get connected with us on social networks!</strong>

                  <v-spacer></v-spacer>

                  <layout justify-space-around>

                  <v-icon large color="green darken-2">business</v-icon>

        <v-icon large color="blue darken-2">chat</v-icon>

        <v-icon large color="purple darken-2">dialpad</v-icon>

        <v-icon large color="teal darken-2">email</v-icon>

        </layout>
                </v-card-title>

                <v-card-actions class="grey darken-3 justify-center">
                  &copy;2018 — <strong>Vuetify</strong>
                </v-card-actions>
              </v-card>
            </v-footer>


      </v-app>
    </div>
    </template>



<script>
export default {
  name: 'Home',

  data () {
    return {



      items: [
        {
          src: 'https://i.imgur.com/AksRc29.gif'
        },
        {
          src: 'https://i.imgur.com/O1WFmTb.jpg'
        },
        {
          src: 'https://i.imgur.com/NmHjpmf.jpg'
        },
        {
          src: 'https://i.imgur.com/DQheXD0.jpg'
        }
      ],

       about: `plicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`








}

}
}
</script>

<style lang="css" scoped>


</style>
