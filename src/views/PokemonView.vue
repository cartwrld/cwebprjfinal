<script lang="ts">
import { Vue, Component, Mixins  } from 'vue-property-decorator';
import { BTable, BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import PokeCard from '@/components/PokeCard.vue';
import fetchData from '../services/apiService';

import GlobalMixin from '@/mixins/global-mixin';
import AutoSearch from '@/components/AutoSearch.vue';
import PokemonForm from '@/components/PokemonForm.vue';
import Pokemon from '@/models/Pokemon';

@Component({
  components: { PokeCard },
})
export default class PokemonView  extends Mixins(GlobalMixin){
  fetchedPokes: any = null;

  token = 'iHaveReadAccess';
  viewPokemon = false;
  // token = '';

  /*
   fields = [
     { key: 'pokeID', sortable: false },
     { key: 'name', sortable: false },
     { key: 'type 1', sortable: false },
     { key: 'type 2', sortable: false },
     { key: 'gen', sortable: false },
     { key: 'hp', sortable: false },
     { key: 'atk', sortable: false },
     { key: 'def', sortable: false },
     { key: 'spatk', sortable: false },
     { key: 'spdef', sortable: false },
   ]
     { key: 'spd', sortable: false },
*/
  // async provider(ctx: BvTableCtxObject) {
  //   if (!this.fetchedPokes) {
  //     this.fetchedPokes = await this.fetchData();
  //   }
  //   console.log(await this.fetchedPokes);
  //
  //   return this.fetchedPokes;
  // }qq
  provider(ctx:BvTableCtxObject):Promise<any> {
    // return fetch('' + ctx.apiUrl).then(res => res.json())
    return this.callAPI(`${ctx.apiUrl}`);
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

  showPokeModal(): void {
    this.viewPokemon = true;
  }

  $refs!: {
    pokemonTable: BTable
  }


  // data variable
  selectedPokemon:Pokemon = new Pokemon()

  // computed from b-table localItems
  get pokeList() {
    return this.$refs.pokemonTable.localItems;
  }


  // region METHODS

  selectRow(item:any) {
    if (!item.id) return;
    this.$refs.pokemonTable.selectRow(this.pokeList.findIndex((i:any) => i.id === item.id));
  }

  refreshTable() {
    this.$refs.pokemonTable.refresh();
  }

  handleSelect(pokemon:Pokemon) {
    this.selectRow(pokemon);
    this.selectedPokemon = pokemon;
  }

  handleAdd(pokemon:Pokemon) {
    // PokemonForm emits a pokemon when a new pokemon returns from the api
    this.pokeList.unshift(pokemon);
    this.handleSelect(pokemon);
  }

  handleUpdate(pokemon:Pokemon) {
    // PokemonForm emits a pokemon when an existing pokemon is updated in the api

    // update the values in the selectedPokemon to the updated values
    Object.assign(this.selectedPokemon, pokemon);
  }

  handleDelete(pokemon:Pokemon) { // PokemonForm emits a pokemon when an existing pokemon is deleted in the api
    this.selectedPokemon = new Pokemon();
    // find the pokemon in the pokemon array
    const index = this.pokeList.findIndex((s:any) => s.id === pokemon.pokeID);
    if (index >= 0) this.pokeList.splice(index, 1);

    // this.refreshTable()
  }

  handleReset(pokemon:Pokemon) { // PokemonForm emits a pokemon when an existing pokemon fails to delete in the api
    // issue happened with delete - so reload pokeList
    this.refreshTable();
  }

  handleCancel() { // PokemonForm emits that the cancel button was clicked
    // do nothing at this point
  }
}
</script>

<template>
  <div class="border ">
    <h1>Pokemon</h1>
    <!-- Iterate over each pokemon and create a PokeCard for each one -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-wrap col-11 justify-content-center">
        <div
          v-for="pokemon in fetchedPokes"
          :key="pokemon.id"
          class="d-flex justify-content-center">
          <PokeCard
            :poke-i-d="pokemon.pokeID"
            :poke-name="pokemon.pokeName"
            :poke-type1="pokemon.pokeType1"
            :poke-type2="pokemon.pokeType2"
            :gen="pokemon.gen"
            :hp="pokemon.hp"
            :atk="pokemon.atk"
            :def="pokemon.def"
            :spatk="pokemon.spatk"
            :spdef="pokemon.spdef"
            :spd="pokemon.spd"
            :sprite="pokemon.sprite"
            variant="light"


          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
