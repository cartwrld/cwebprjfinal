<script lang="ts">
import {
  Component, Prop, Mixins,
} from 'vue-property-decorator';
import {BIcon} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import Pokemon from '@/models/Pokemon';
// import r from '../models/Pokemon';

@Component({})
export default class PokeCard extends Mixins(GlobalMixin) {
  @Prop() private pokeID!: number;

  @Prop() private pokeName!: string;

  @Prop() private pokeType1!: string;

  @Prop() private pokeType2!: string;

  @Prop() private sprite!: string;

  @Prop() private variant!: string;

  // ================== FUNCTIONS ====================
  capFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  showPokeModal(): void {
    this.viewPokemon = true;
  }

  // ================== VARIABLES ====================

  selectedPokemon = new Pokemon();
  tempPokemon: Pokemon = new Pokemon();

  violation: any = {};

  viewPokemon = false;

  // ================== UI FUNCTIONS ====================


}
// ================== TEMPLATE ====================
</script>
<template>
  <div class="d-flex justify-content-center col-6 p-0">
    <div class="d-flex justify-content-center col-6 p-0">

      <b-button
        :variant="variant"
        @click="showPokeModal">
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
            <h5 class="rounded fw-semibold mx-4 text-shadow py-4">
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

      <div class="d-flex flex-column align-items-center"> <!-- BASE -->

        <div class="d-flex justify-content-around align-items-center w-100">
          <!-- id + name + gen -->

          <div class="d-flex justify-content-center align-items-center">
            <span
              class="bg-light p-2 px-3 rounded-5 border fw-semibold h5 pe-3 text-dark
                      shadow-sm">
              {{ pokeID }}</span>
          </div>
<!--          <div class="border border-dark bg-light rounded-5"> &lt;!&ndash; id container &ndash;&gt;-->
<!--            <div class="rounded-5 fs-3 px-2 px-2"> &lt;!&ndash; id &ndash;&gt;-->
<!--              <span class="p-0">10</span>-->
<!--            </div>-->
<!--          </div>-->
          <div class="d-flex justify-content-start"> <!-- name container -->
            <div class="fs-2"> <!-- name -->{{ capFirstLetter(pokeName) }}</div>
          </div>


          <div class="d-flex justify-content-center align-items-center">
            <!-- gen outer container -->
            <div
              class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">
              <!-- hp container -->
              <span class="fw-bold">GEN</span>
              <span class="fw-semibold fs-4"><!-- hp num -->11</span>
            </div>

          </div>
        </div>

        <div class="border border-1 my-3 w-100"></div>

        <div> <!-- img + types -->
          <div
            class="d-flex justify-content-around align-items-center p-2 mb-2 rounded-3 shadow-sm bg-light border">
            <!-- img container -->
            <img src="../assets/cartavious.png" alt="pokemon" width="350px"
                 class="rounded shadow-sm">
          </div>
          <div class="d-flex justify-content-around align-items-center py-2">
            <!-- types container -->
            <div
              class="bg-light d-flex justify-content-center align-items-center border bg-light col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm">
              <!-- type1 container -->
              <span><!-- type1 -->{{ capFirstLetter(pokeType1) }}</span>
            </div>
            <div
              class="bg-light d-flex justify-content-center align-items-center border bg-light col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm">
              <!-- type2 container -->
              <span><!-- type2 -->{{ capFirstLetter(pokeType2) }}</span>
            </div>
          </div>
        </div>

        <div class="border border-1 my-3 w-100"></div>

        <div class="d-flex justify-content-around w-75"> <!-- stats outer container -->

          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">
            <!-- hp container -->
            <span class="fw-bold">HP</span>
            <span class="fw-semibold fs-5"><!-- hp num -->123</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 mx-2 shadow-sm">
            <!-- atk container -->
            <span class="fw-bold">ATK</span>
            <span class="fw-semibold fs-5"><!-- atk num -->123</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 me-1 shadow-sm">
            <!-- def container -->
            <span class="fw-bold">DEF</span>
            <span class="fw-semibold fs-5"><!-- def num -->123</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
            <!-- spatk container -->
            <span class="fw-bold">SPATK</span>
            <span class="fw-semibold fs-5"><!-- spatk num -->123</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 mx-2 shadow-sm">
            <!-- spdef container -->
            <span class="fw-bold">SPDEF</span>
            <span class="fw-semibold fs-5"><!-- spdef num -->123</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 shadow-sm">
            <!-- spd container -->
            <span class="fw-bold">SPD</span>
            <span class="fw-semibold fs-5"><!-- spd num -->123</span>
          </div>

        </div>

      </div> <!-- close BASE -->

      <template #modal-cancel>
        <b-icon-x-square-fill/>
        Cancel
      </template>
      <template #modal-ok>
        <b-icon-cloud-arrow-up-fill/>
        Add Pokemon
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
