<template>
  <div class="border">
    <h1 class="pb-5">Pokemon</h1>

    <div class="d-flex justify-content-center align-items-center  p-5 rounded-4">
    <div class="d-flex justify-content-between align-items-center  w-100">
      <div class="d-flex justify-content-center align-items-center ">
        <h4>Search for a Pokemon:</h4>
      </div>
      <div class="d-flex justify-content-center align-items-center rounded w-50 shadow-sm">

        <PokemonSearch
          class="col-12"
          min-search-length="3"
          @busy="setBusy"
          :pokemon="fetchedPokes"
          @pokemonSelected="handlePokeCardSelected"
          @search-query-changed="handleSearchQueryChange"
        />
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <b-button variant="success" class="fw-semibold shadow-sm" @click="openAddPokemonModal">
          <b-icon-cloud-arrow-up-fill class="me-2"/><span class="ms-1">Add Pokemon</span>
        </b-button>
      </div>
    </div>
    </div>

    <b-modal v-model="viewPokemon" title="Add Pokemon" @hidden="handleModalHidden" hide-footer>
      <PokemonForm
        :pokemon="selectedPokemon"
        @added="handleAdd"
        @updated="handleUpdate"
        @reset="handleReset"
        @cancelled="handleCancel"
      />
    </b-modal>

    <div class="d-flex justify-content-center w-100">
      <div class="border border-1 my-3 mb-5 w-75 px-5"></div>
    </div>


    <!-- Iterate over each pokemon and create a PokeCard for each one -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-wrap col-11 justify-content-center">

        <div v-for="pokemon in filteredPokemonList" :key="pokemon.pokeID" class="d-flex justify-content-center">
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
            @edit-pokemon="openAddPokemonModal"
            @deleted="handleDelete"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Mixins  } from 'vue-property-decorator';
import { BTable, BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import PokeCard from '@/components/PokeCard.vue';
import fetchData from '../services/apiService';
import {capFirstLetter} from "@/services/utils";
import GlobalMixin from '@/mixins/global-mixin';
import AutoSearch from '@/components/AutoSearch.vue';
import PokemonForm from '@/components/PokemonForm.vue';
import Pokemon from '@/models/Pokemon';
import PokemonSearch from "@/components/PokemonSearch.vue";

@Component({
  components: {PokemonForm, PokemonSearch, PokeCard },
})
export default class PokemonView  extends Mixins(GlobalMixin){
  fetchedPokes: any = null;

  filteredPokemonList: Pokemon[] = [];

  token = 'iHaveReadAccess';
  viewPokemon = false;
  // token = '';

  provider(ctx:BvTableCtxObject):Promise<any> {
    // return fetch('' + ctx.apiUrl).then(res => res.json())
    return this.callAPI(`${ctx.apiUrl}`);
  }

  // Method to fetch data
  async fetchData() {
    try {
      const endpoint = 'pokemon';
      this.fetchedPokes = await fetchData(endpoint, this.token);
      this.filteredPokemonList = this.fetchedPokes;
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

  openAddPokemonModal(selectedPokemon: Pokemon): void {
    this.selectedPokemon = selectedPokemon;
    this.viewPokemon = true;
  }

  // openEditPokemonModal(selectedPokemon: Pokemon): void {
  //   this.selectedPokemon = selectedPokemon;
  //   this.viewPokemon = true;
  // }

  // Method to handle modal hidden event
  handleModalHidden(): void {
    this.selectedPokemon = new Pokemon(); // Reset selected Pokemon when the modal is hidden
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

  handleSearchQueryChange(query: string) {
    // Filter the local Pokemon list based on the search query
    if (query === '') {
      // If the search query is empty, reset the filtered list
      this.filteredPokemonList = this.fetchedPokes;
    } else {
    this.filteredPokemonList = this.fetchedPokes.filter((pokemon: { pokeName: any; }) =>
      (pokemon.pokeName ?? '').toLowerCase().includes(query.toLowerCase())
    );}
  }

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

  handlePokeCardSelected(pokemon: Pokemon): void {
    // Set the selected Pokemon and show the modal
    this.selectedPokemon = pokemon;
    this.showPokeModal();
  }

  handleAdd(pokemon:Pokemon) {
    // PokemonForm emits a pokemon when a new pokemon returns from the api
    //this.pokeList.unshift(pokemon);
    //this.handleSelect(pokemon);
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



<style scoped>

</style>
