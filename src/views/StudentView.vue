<!-- eslint-disable max-len -->
<!--
This component acts as the PARENT component for the PokemonForm, PokemonTable and PokemonSearch Components
1. This component will set the prop for the child components and
2. handle the emits from the child components
3. handle sending information from one child component to another child component
4, if one child component is busy, this component will disable the other components as needed

VUE JS Directives
v-bind directive - https://vuejs.org/v2/api/#v-bind - 1 way communication from variables to control
v-on directive - https://vuejs.org/v2/api/#v-on - vue event handler hook to call a method

USING short cuts:
'v-bind:' can be shorted to just use the ':' -- example v-bind:disabled="isNew" can be shortened  :disabled="isNew"
-->
<template>
  <div class="text-left">
    <div class="row">
      <h1 class="col-lg-8">Pokemon:</h1>
      <!-- SEARCH : when user selects pokemon from search list then call the b-table selectRow function-->
      <AutoSearch class="col-lg-4 pl-lg-0 mb-2" min-search-length="3" @selected="handleSelect" @busy="setBusy" />
    </div>
    <div class="row">
      <!--      POKEMON FORM,
            bind the pokemon prop to the data variable object 'selectedPokemon',
            bind the disabled prop to the computed property 'isDisabled'
            set debug prop as needed
            handle all the emitted events from the PokemonForm component
            -->
      <PokemonForm
        class="col-md-6 col-lg-4 order-md-1 pl-lg-0 "
        debug
        :pokemon="selectedPokemon"
        :disabled="isDisabled"
        @busy="setBusy"
        @added="handleAdd"
        @updated="handleUpdate"
        @deleted="handleDelete"
        @cancelled="handleCancel"
        @reset="handleReset" />
      <!--      POKEMON TABLE,
            bind the disabled prop to the computed property 'isDisabled'
            handle all the emitted events from the PokemonTable component
            set debug prop as needed
            add a ref (reference) to this component as 'pokemonTable' so we can animate it when savePokemon is called
            https://vuejs.org/v2/api/#ref
            -->
      <!--    show the overlay if the component is busy or disabled-->
      <b-overlay :show="isDisabled" opacity=".25" class="col-md-6 col-lg-8 order-md-0">
        <b-table
          ref="pokemonTable"
          responsive
          :items="provider"
          :fields="fields"
          :api-url="POKEMON_API"
          @row-clicked="selectedPokemon = $event"
          selectable
          select-mode="single"
          selected-variant="primary"
          striped
          hover
          primary-key="id"
          no-provider-sorting
          no-provider-paging
          no-provider-filtering>
          <template #table-busy>
            <div class="text-center text-danger my-2">
              <b-spinner class="align-middle"/>
              <strong>Loading...</strong>
            </div>
          </template>

        </b-table>
      </b-overlay>
    </div>
    <!--    ONLY SHOW debug info (very ugly) if the debug prop is set to true-->
    <b-alert variant="secondary" dismissible :show="debug">
      <pre>
PROPS:
{{$props}}

DATA:
{{$data}}
        </pre>
    </b-alert>
  </div>
</template>

<script lang="ts">
/* eslint-disable max-len */
import { Component, Mixins } from 'vue-property-decorator';
import { BTable, BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import GlobalMixin from '@/mixins/global-mixin';
import AutoSearch from '@/components/AutoSearch.vue';
import PokemonForm from '@/components/PokemonForm.vue';
import Pokemon from '@/models/Pokemon';

// this our TypeScript Component Class instead of the less friendly  JS class
@Component({
  components: { PokemonForm, AutoSearch },
})
export default class PokemonView extends Mixins(GlobalMixin) {
  $refs!: {
    pokemonTable: BTable
  };

  provider(ctx:BvTableCtxObject):Promise<any> {
    // return fetch('' + ctx.apiUrl).then(res => res.json())
    return this.callAPI(`${ctx.apiUrl}`);
  }

  // data variable
  selectedPokemon:Pokemon = new Pokemon();

  // computed from b-table localItems
  get pokeList() {
    return this.$refs.pokemonTable.localItems;
  }

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
    { key: 'spd', sortable: false },
  ]

  // region METHODS

  selectRow(item:any) {
    if (!item.id) return;
    this.$refs.pokemonTable.selectRow(this.pokeList.findIndex((i:any) => i.id === item.pokeID));
  }

  refreshTable() {
    this.$refs.pokemonTable.refresh();
  }

  handleSelect(pokemon:Pokemon) {
    this.selectRow(pokemon);
    this.selectedPokemon = pokemon;
  }

  handleAdd(pokemon:Pokemon) { // PokemonForm emits a pokemon when a new pokemon returns from the api
    this.pokeList.unshift(pokemon);
    this.handleSelect(pokemon);
  }

  handleUpdate(pokemon:Pokemon) { // PokemonForm emits a pokemon when an existing pokemon is updated in the api
    Object.assign(this.selectedPokemon, pokemon); // update the values in the selectedPokemon to the updated values
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
