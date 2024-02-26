<template>
 
  <div id="app">
    <router-link to="/register">Register</router-link>
    <router-link to="/login">LoginForm</router-link>
    <router-link to="/Journey-Form">JourneyForm</router-link>
    <router-link to="/Journey-Request">JourneyRequest</router-link>
    <router-link to="/Dashboard-View">Dashboard</router-link>
    


    <div>
    <router-view></router-view>
  </div>
    <!-- <RegisterForm></RegisterForm> -->
  </div>
  <!-- <script src="/path/to/your/main.js"></script> -->
</template>

<script>
// import RegisterForm from './components/RegisterForm.vue';



export default {
  name: 'App',
  components: {
    // RegisterForm
}
}
</script>

<style src="./assets/styles/tailwind.css"></style>

<style scoped>
  a {
    display: inline-block;
    background-color: rgb(235, 3, 3);
    border: solid 1px black;
    color: white;
    padding: 5px;
    margin: 10px;
  }
  a:hover,
  a.router-link-active {
    background-color: rgb(110, 79, 13);
  }

</style>                  

