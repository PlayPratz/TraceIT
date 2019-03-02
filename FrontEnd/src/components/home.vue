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


















<h1>MEET THE TEAM</h1>

       <v-container

             fluid
             grid-list-lg
             fill-height
             style="min-height: 434px"
           >
             <v-fade-transition mode="out-in">
               <v-layout >
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
             </v-fade-transition>
           </v-container>















    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          >
          </v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
          <v-card-actions class="white justify-center">
               <v-btn
                 v-for="(social, i) in socials"
                 :key="i"
                 :color="social.color"
                 class="white--text"
                 fab
                 icon
                 small
               >
                 <v-icon>{{ social.icon }}</v-icon>
               </v-btn>
             </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>


    <v-footer
      dark
      height="auto"
    >
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-xs-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3 white--text"
            icon
          >
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          &copy;2018 — <strong>Vuetify</strong>
        </v-card-text>
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




      socials: [
      {
        icon: 'fab fa-facebook',
        color: 'indigo'
      },
      {
        icon: 'fab fa-linkedin',
        color: 'cyan darken-1'
      },
      {
        icon: 'fab fa-instagram',
        color: 'red lighten-3'
      }
    ],




    icons: [
     'fab fa-facebook',
     'fab fa-twitter',
     'fab fa-google-plus',
     'fab fa-linkedin',
     'fab fa-instagram'
   ],





      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],


          show: true

    }
  }
}
</script>

<style lang="css" scoped>


</style>
