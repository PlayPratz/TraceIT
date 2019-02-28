<template lang="html">
  <div class="">

    <ProductID v-on:add-id="addID"/>

    <ProductChain />

    <Gmap />

  </div>
</template>

<script>
import ProductChain from '../components/ProductChain.vue';
import ProductID from '../components/ProductID.vue';
import Gmap from '../components/Gmap.vue';
//import {gmapApi} from 'vue2-google-maps'
export default {
  name: "Product",
  components: {
    ProductChain,
    ProductID,
    Gmap
  },
  methods: {
    addID(id) {
      console.log(id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
