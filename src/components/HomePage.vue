<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <!-- Header -->
    <div class="mb-4">
      <h1>Welcome to PowerPoke!</h1>
    </div>

    <!-- Buttons -->
    <div class="mb-4 d-flex justify-content-around col-8 ">
      <div class="d-flex justify-content-center align-items-center p-2 h2 col-4 bg-light rounded-4 shadow-sm" >
        <b-button variant="light" @click="goTo('/pokemon')" class="shadow rounded-3 p-4 col-12">
<!--          <b-icon-circle-half rotate="90deg" variant="danger bg-light rounded-5 me-2"></b-icon-circle-half>-->
          <img src="../assets/pokeball_star3.png" alt="pkbl" width="100px">
          <h4 class="p-0 m-0 mt-3">View Pokemon</h4>
        </b-button>
      </div>
      <div class="d-flex justify-content-center align-items-center p-2 h2 col-4 bg-light rounded-4 shadow-sm mx-5">
        <b-button variant="light" @click="goTo('/poketeam')" class="shadow rounded-3 p-4 col-12">
          <img src="../assets/pokeball_triple.png" alt="pkbl" width="100px">
          <h4 class="p-0 m-0 mt-3">View PokeTeams</h4>
        </b-button>
      </div>
      <div class="d-flex justify-content-center align-items-center p-2 h2 col-4 bg-light rounded-4 shadow-sm">
        <b-button variant="light" @click="goTo('/users')" class="shadow rounded-3 p-4 col-12">
          <img src="../assets/pokeuser.png" alt="pkbl" width="100px">
          <h4 class="p-0 m-0 mt-3">View Users</h4>
        </b-button>
      </div>
    </div>

    <div class="border border-1 my-3 w-100"></div>

    <!-- Cards for Popular Pokemon -->
    <div class="d-flex flex-column">
      <div class="mb-4 col-12">
        <h2>Popular Pokemon</h2>
      </div>

      <!-- Pokemon Cards -->
      <div class="d-flex flex-wrap justify-content-center">

        <div v-for="pokemon in popularPokemon" :key="pokemon.pokeID" class="mb-3 mx-3 bg-danger rounded-3 p-2">
          <div class="d-flex flex-column justify-content-center align-items-center col-12 bg-light rounded-1">
          <div class="d-flex flex-column justify-content-center align-items-center col-12">
            <div class="d-flex justify-content-center align-items-center">
              <img :src="pokemon.sprite" alt="Pokemon" width="200px" class="p-2"/>
            </div>
            <div class="text-center pb-2">
              <h5>{{ capFirstLetter(pokemon.pokeName) }}</h5>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>


Certainly! Following the requested format and extending GlobalMixin, the class component in Vue 2 would look like this:

javascript
Copy code
<script>
import {Vue, Component} from 'vue-property-decorator';
import fetchData from '../services/apiService';
import GlobalMixin from '@/mixins/global-mixin';
import Pokemon from '@/models/Pokemon';
import {capFirstLetter} from "../services/utils"; // Make sure to import your Pokemon model

@Component({
  methods: {capFirstLetter}
})
export default class PokemonLayout extends GlobalMixin {
  // Variables
  allPokemon = [];
  popularPokemon = [];
  token = 'iHaveAdminAccess'

  // Methods
  async fetchAllPokemon() {
    try {
      const endpoint = 'pokemon'; // Replace with your actual API endpoint
      const response = await fetchData(endpoint, this.token); // Replace 'this.token' with your actual token
      this.allPokemon = response; // Make sure the response is in the expected format
      this.selectRandomPokemon();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  selectRandomPokemon() {
    const shuffled = this.allPokemon.sort(() => 0.5 - Math.random());
    this.popularPokemon = shuffled.slice(0, 10);
  }

  // Lifecycle hooks
  mounted() {
    this.fetchAllPokemon();
  }

  goTo(path) {
    this.$router.push(path);
  }
}
</script>

<style scoped>
/* Aspect ratio box styles to keep the images responsive */
.aspect-ratio-box {
  height: 0;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
}

.aspect-ratio-box-inside {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
