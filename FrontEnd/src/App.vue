<template>
  <div id="app">
    <head>
      <link href='https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons' rel="stylesheet">
    </head>
    <v-toolbar color="blue darken-3" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/" v-if="authenticated == false">Home</v-btn>
        <v-btn flat to="/login" v-if="authenticated == false">Login</v-btn>
        <v-btn flat to="/register" v-if="authenticated == false">Register</v-btn>
        <v-btn flat to="/InventoryTable" v-if="authenticated == false">Cart</v-btn>
        <v-btn flat to="/" v-if="authenticated" v-on:click.native="logout()" replace>Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view @authenticated="setAuthenticated"></router-view>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "App",
    data() {
      return {
        authenticated: false,
      }
    },
    mounted() {
      if(!this.authenticated) {
          this.$router.replace({ name: "home" });
      }
    },
    methods: {
      setAuthenticated(status) {
        this.authenticated = status;
        console.log(status);
      },
      logout() {
        this.authenticated = false;
      }
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
