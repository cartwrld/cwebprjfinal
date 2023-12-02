<script lang="ts">
import {
  Component, Prop, Mixins,
} from 'vue-property-decorator';
import { BIcon } from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import Pokemon from '@/models/Pokemon';
// import r from '../models/Pokemon';

@Component({})
export default class PokeCard extends Mixins(GlobalMixin) {
  @Prop() private pokeID! : number;

  @Prop() private pokeName! : string;

  @Prop() private pokeType1! : string;

  @Prop() private pokeType2! : string;

  @Prop() private sprite! : string;

  @Prop() private variant! : string;

  // ================== FUNCTIONS ====================
  capFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  showPokeModal(): void {
    this.viewPokemon = true;
  }

  // ================== VARIABLES ====================

  tempPokemon: Pokemon = new Pokemon();

  violation: any = {};

  viewPokemon = false;

}

// ================== TEMPLATE ====================
</script>
<template>
  <div class="d-flex justify-content-center col-6 p-0">
    <div class="d-flex justify-content-center col-6 p-0">

      <b-button
                :variant="variant"
                @click='showPokeModal'>
        <div
          class="d-flex justify-content-around bg-danger rounded-4 py-1 px-3 m-0 shadow
        poke-card px-0">
          <div class="d-flex justify-content-center align-items-center">
            <span
              class="bg-light p-2 px-3 rounded-5 border fw-semibold h5 pe-3 text-dark
            shadow-sm">
              {{ pokeID }}</span>
          </div>
          <div class="d-flex justify-content-center align-items-center text-light">
            <h5 class=" rounded fw-semibold mx-4 text-shadow py-4">
              {{ capFirstLetter(pokeName) }}</h5>
          </div>
          <div class="d-flex flex-column justify-content-around">
            <span class="bg-light p-2 py-1 my-1 rounded fw-semibold text-dark shadow-sm">
              {{ capFirstLetter(pokeType1) }}</span>
            <span
              class="bg-light p-2 py-1 my-1 rounded fw-semibold text-dark shadow-sm"
              v-if="pokeType2">
              {{ capFirstLetter(pokeType2) }}</span>
          </div>
        </div>
      </b-button>
    </div>

    <b-modal
      title="View Pokemon"
      ok-variant="success"
      cancel-variant="danger"
      v-model="viewPokemon">



      <template #modal-cancel>
        <b-icon-x-square-fill /> Cancel
      </template>
      <template #modal-ok>
        <b-icon-cloud-arrow-up-fill/> Add Pokemon
      </template>
    </b-modal>
  </div>
</template>
<style scoped>
.poke-card {
  width: 320px; /* Fixed width */
  height: 100px; /* Fixed height */
}
</style>
