<template>
  <div id="app">
    <!--    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <div class="mb-5">
      <div class="bg-danger">
        <nav class="navbar navbar-expand-lg bg-danger navbar-dark sticky-top shadow">
          <div class="container-fluid">
            <div class="container-fluid text-center d-flex flex-row flex wrap  align-items-center">
              <a class="navbar-brand" href="">
                <img src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png" alt="Poke Ball" width="50px"
                     height="50px">
              </a>
              <div class="container-fluid ">
                <div class="navbar-text text-center text-white h2 h6-xl pt-3">PowerPoke</div>
              </div>
              <button class="navbar-toggler mt-xl-3" type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
            </div>
            <div class="container-fluid collapse navbar-collapse mx-0 px-0 "
                 id="collapsibleNavbar">
              <div class="navbar-nav container ">
                <div class="bg-danger bg-gradient d-flex flex-column flex-lg-row rounded-2">

                  <p class="nav-item m-0">
                    <router-link class="nav-link active" to="/">Home
                      <span class="visually-hidden">(current)</span>
                    </router-link>
                  </p>
                  <p class="nav-item m-0">
                    <router-link class="nav-link active" to="/pokemon">Pokemon
                      <span class="visually-hidden">(current)</span>
                    </router-link>
                  </p>
                  <p class="nav-item m-0">
                    <router-link class="nav-link active" to="/poketeam">PokeTeam
                      <span class="visually-hidden">(current)</span>
                    </router-link>
                  </p>
                  <p class="nav-item m-0">
                    <router-link class="nav-link active" to="/users">Users
                      <span class="visually-hidden">(current)</span>
                    </router-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <router-view class="container-xl"/>
  </div>
</template>
<script setup lang="ts">
</script>
