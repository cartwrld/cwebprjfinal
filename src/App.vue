<template>
  <div id="app">
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <div>

      <b-nav align="center" class="mb-4">
        <b-nav-item to="/" exact-active-class="active" >Home</b-nav-item> |
        <!--  Add Nav item for Pokemon View -->
        <b-nav-item to="/pokemon" exact-active-class="active"> Pokemon </b-nav-item> |
        <!--  Add Nav item for PokeTeam View -->
        <b-nav-item to="/poketeam" exact-active-class="active"> PokeTeam </b-nav-item> |
        <!--  Add Nav item for User View -->
        <b-nav-item to="/users" exact-active-class="active"> Users </b-nav-item>
      </b-nav>
    </div>
    <router-view class="container-xl"/>
  </div>
</template>
<script setup lang="ts">
</script>
