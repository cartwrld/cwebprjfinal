<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import PokeCard from '@/components/PokeCard.vue';
import fetchData from '../services/apiService';

@Component({
  components: {
    PokeCard,
  },
})
export default class PokemonView extends Vue {
  fetchedPokes: any = null;

  token = 'iHaveReadAccess';
  // token = '';

  // fields = [
  //   { key: 'pokeID', sortable: false },
  //   { key: 'name', sortable: false },
  //   { key: 'type 1', sortable: false },
  //   { key: 'type 2', sortable: false },
  //   { key: 'gen', sortable: false },
  //   { key: 'hp', sortable: false },
  //   { key: 'atk', sortable: false },
  //   { key: 'def', sortable: false },
  //   { key: 'spatk', sortable: false },
  //   { key: 'spdef', sortable: false },
  //   { key: 'spd', sortable: false },
  // ]

  async provider(ctx: BvTableCtxObject) {
    if (!this.fetchedPokes) {
      this.fetchedPokes = await this.fetchData();
    }
    console.log(await this.fetchedPokes);

    return this.fetchedPokes;
  }

  // Method to fetch data
  async fetchData() {
    try {
      const endpoint = 'pokemon';
      this.fetchedPokes = await fetchData(endpoint, this.token);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Fetch data when component is mounted
  async mounted() {
    await this.fetchData();
  }
}
</script>

<template>
  <div class="border ">
    <h1>Pokemon</h1>
    <!-- Iterate over each pokemon and create a PokeCard for each one -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-wrap col-11 justify-content-center">
        <div v-for="pokemon in fetchedPokes" :key="pokemon.id" class="p-2 d-flex
        justify-content-center">
          <PokeCard
            :poke-i-d="pokemon.pokeID"
            :poke-name="pokemon.pokeName"
            :poke-type1="pokemon.pokeType1"
            :poke-type2="pokemon.pokeType2"
            variant="light"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
