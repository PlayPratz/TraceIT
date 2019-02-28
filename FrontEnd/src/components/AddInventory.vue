<template lang="html">
  <div>
    <form @submit="addInventory">
      ProductID: <input type="text" v-model="id" placeholder="1"><br />
      Quantity: <input type="text" v-model="quantity" placeholder="10"><br />
      <input type="submit" class="btn" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
  name: "AddInventory",
  data() {
    return{
      id: '',
      quantity: ''
    }
  },
  methods: {
    addInventory(e) {
      e.preventDefault();
      const newInventory = {
        id: this.id,
        quantity: this.quantity
      }
      this.$emit('add-inventory',newInventory);
      this.id="";
      this.quantity="";
    }
  }
}
</script>

<style lang="css" scoped>
</style>
