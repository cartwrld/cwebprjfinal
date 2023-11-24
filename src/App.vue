<template>
  <div id="app">
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <b-nav pills align="center" class="mb-4">
      <b-nav-item to="/" exact-active-class="active" >Home</b-nav-item> |
      <b-nav-item to="/about" exact-active-class="active"> About </b-nav-item> |
      <!--  Add Nav item for Student View -->
      <b-nav-item to="/student" exact-active-class="active"> Student </b-nav-item> |
      <!--  Add Nav item for Student View -->
      <b-nav-item to="/product" exact-active-class="active"> Product </b-nav-item>
    </b-nav>
    <router-view class="container-xl"/>
  </div>
</template>
<script setup lang="ts">
</script>
