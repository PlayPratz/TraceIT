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
        <v-btn flat to="/">Home</v-btn>
        <v-btn flat to="/login">Login</v-btn>
        <v-btn flat to="/register">Register</v-btn>
        <!--v-btn flat to="/chain">Chain</v-btn>
        <v-btn flat to="/Product">Product</v-btn>
        <v-btn flat to="/form">Form</v-btn>
        <v-btn flat to="/login ">Login</v-btn-->
      </v-toolbar-items>
    </v-toolbar>
    <router-view/>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: "App"
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
