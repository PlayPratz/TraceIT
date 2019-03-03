<template lang="html">
  <div id="app" v-bind:style="{ backgroundColor: color}">
    <div id="inspire">
    <v-container fluid>
      <v-flex xs12>
        <v-combobox
          v-model="select"
          :items="list"
          label="Enter Batch ID"
          v-on:change="changeID()"
        ></v-combobox>
      </v-flex>
    </v-container>
  </div>
</div>
</template>

<script>
export default {
  name: "ProductID",
  data() {
    return {
      color: '#fafafa',
      select: '',
      items: [
        'Programming',
        'Design',
        'Vue',
        'Vuetify'
      ]
    }
  },
  props: ["list"],
  methods: {
    changeID() {
      this.$emit('add-id',this.select);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
