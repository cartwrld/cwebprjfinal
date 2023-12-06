<template>
  <!--  <div class="d-flex justify-content-center p-0">-->
  <div class="d-flex justify-content-center p-0">

    <b-button

      class="p-2 rounded-2"
      :variant="variant"
      @click="showPokeModal">

      <div :style="{background: typePalette.brd_grd}"
           class="rounded-4 p-1">

        <div :style="{ backgroundColor: typePalette.bg_grd }"
             class="d-flex justify-content-around rounded-4 py-1 px-3 m-0 shadow
                  poke-card px-0">
          <div class="d-flex justify-content-center align-items-center">
            <span
              class="bg-light p-2 px-3 rounded-5 border fw-semibold h5 pe-3 text-dark
                      shadow-sm">
              {{ pokeID }}</span>
          </div>
          <div :style="{color: typePalette.tc}"
               class="d-flex justify-content-center align-items-center">
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
      </div>
    </b-button>
    <!--    </div>-->

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
              class="bg-light p-2 px-3 rounded-5 border fw-semibold h3 pe-3 text-dark
                      shadow-sm">
              {{ pokeID }}</span>
          </div>
          <!--          <div class="border border-dark bg-light rounded-5"> &lt;!&ndash; id container &ndash;&gt;-->
          <!--            <div class="rounded-5 fs-3 px-2 px-2"> &lt;!&ndash; id &ndash;&gt;-->
          <!--              <span class="p-0">10</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="d-flex justify-content-start"> <!-- name container -->
            <div class="fs-1"> <!-- name -->{{ capFirstLetter(pokeName) }}</div>
          </div>


          <div class="d-flex justify-content-center align-items-center">
            <!-- gen outer container -->
            <div
              class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">
              <!-- hp container -->
              <span class="fw-bold">GEN</span>
              <span class="fw-semibold fs-5"><!-- hp num -->{{ gen }}</span>
            </div>

          </div>
        </div>

        <div class="border border-1 my-3 w-100"></div>

        <div> <!-- img + types -->
          <div
            :style="{ background: typePalette.bg_grd}"
            class="d-flex justify-content-around align-items-center p-2 mb-2 rounded-3 shadow-sm border">
            <!-- img container -->
            <img v-bind:src="sprite" alt="pokemon" width="350px" class="rounded shadow-sm bg-light">

          </div>
          <div class="d-flex justify-content-around align-items-center py-2">
            <!-- types container -->
            <div
              :style="{ background: typePalette.t1brd, color: typePalette.tc}"
              class="d-flex justify-content-center align-items-center border col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm">
              <!-- type1 container -->
              <span class="py-1"><!-- type1 -->{{ capFirstLetter(pokeType1) }}</span>
            </div>
            <div
              :style="{ background: typePalette.t2brd, color: typePalette.tc}"
              class="d-flex justify-content-center align-items-center border col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm"
              v-if="pokeType2">
              <!-- type2 container -->
              <span class="py-1"><!-- type2 -->{{ capFirstLetter(pokeType2) }}</span>
            </div>
          </div>
        </div>

        <div class="border border-1 my-3 w-100"></div>

        <div class="d-flex justify-content-around w-75"> <!-- stats outer container -->

          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">
            <!-- hp container -->
            <span class="fw-bold">HP</span>
            <span class="fw-semibold fs-5"><!-- hp num -->{{ hp }}</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 mx-2 shadow-sm">
            <!-- atk container -->
            <span class="fw-bold">ATK</span>
            <span class="fw-semibold fs-5"><!-- atk num -->{{ atk }}</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 me-1 shadow-sm">
            <!-- def container -->
            <span class="fw-bold">DEF</span>
            <span class="fw-semibold fs-5"><!-- def num -->{{ def }}</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
            <!-- spatk container -->
            <span class="fw-bold">SPATK</span>
            <span class="fw-semibold fs-5"><!-- spatk num -->{{ spatk }}</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 mx-2 shadow-sm">
            <!-- spdef container -->
            <span class="fw-bold">SPDEF</span>
            <span class="fw-semibold fs-5"><!-- spdef num -->{{ spdef }}</span>
          </div>
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 shadow-sm">
            <!-- spd container -->
            <span class="fw-bold">SPD</span>
            <span class="fw-semibold fs-5"><!-- spd num -->{{ spd }}</span>
          </div>

        </div>

      </div> <!-- close BASE -->

      <template #modal-cancel>
        <b-icon-x-square-fill/>
        <span class="ps-3">Delete Pokemon</span>
      </template>
      <template #modal-ok>
        <b-icon-cloud-arrow-up-fill/>
        <span class="ps-3">Edit Pokemon</span>
      </template>
    </b-modal>
  </div>
</template>
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
  @Prop() private gen!: number;
  @Prop() private hp!: number;
  @Prop() private atk!: number;
  @Prop() private def!: number;
  @Prop() private spatk!: number;
  @Prop() private spdef!: number;
  @Prop() private spd!: number;
  @Prop() private sprite!: string;

  @Prop() private variant!: string;

  // ================== FUNCTIONS ====================
  capFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  showPokeModal(): void {
    this.viewPokemon = true;
  }

  TypePalette() {
    let tp = {
      t1brd: '',
      t1bg: '',
      t2brd: '',
      t2bg: '',
      tc: 'white',
      brd_grd: '',
      bg_grd: ''
    }

    tp = this.getTypePalette(tp, this.pokeType1, this.pokeType2);

    if (tp.t2brd !== '' && tp.t2bg !== '') {
      tp.bg_grd = `linear-gradient(to right bottom, ${tp.t1bg}, ${tp.t2bg})`
      tp.brd_grd = `linear-gradient(to right bottom, ${tp.t1brd}, ${tp.t2brd})`
      tp.tc = 'white'
    } else {
      tp.brd_grd = tp.t1brd
      tp.bg_grd = tp.t1bg
    }
    return tp
  }

  // Define a method to get the color based on Pokémon type
  getTypePalette(tp: any, t1: string, t2: string | null | undefined) {

    switch (t1.toLowerCase()) {
      case 'normal':      tp.brd_grd = '#cccccc'; tp.bg_grd = '#d8d8d8'; tp.t1brd = '#cccccc'; tp.t1bg = '#d8d8d8'; tp.tc = '#333333'; break;
      case 'fire':        tp.brd_grd = '#DC143C'; tp.bg_grd = '#e74e6c'; tp.t1brd = '#DC143C'; tp.t1bg = '#e74e6c'; break;
      case 'water':       tp.brd_grd = '#235fee'; tp.bg_grd = '#628df4'; tp.t1brd = '#235fee'; tp.t1bg = '#628df4'; break;
      case 'grass':       tp.brd_grd = '#27CB4F'; tp.bg_grd = '#68db84'; tp.t1brd = '#27CB4F'; tp.t1bg = '#68db84'; break;
      case 'electric':    tp.brd_grd = '#FFFF00'; tp.bg_grd = '#e8e868'; tp.t1brd = '#FFFF00'; tp.t1bg = '#e8e868'; tp.tc = '#333333'; break;
      case 'ice':         tp.brd_grd = '#98e4ff'; tp.bg_grd = '#bef2ff'; tp.t1brd = '#98e4ff'; tp.t1bg = '#bef2ff'; tp.tc = '#333333'; break;
      case 'fighting':    tp.brd_grd = '#800000'; tp.bg_grd = '#923232'; tp.t1brd = '#800000'; tp.t1bg = '#923232'; break;
      case 'poison':      tp.brd_grd = '#800080'; tp.bg_grd = '#953695'; tp.t1brd = '#800080'; tp.t1bg = '#953695'; break;
      case 'ground':      tp.brd_grd = '#F4A460'; tp.bg_grd = '#fac592'; tp.t1brd = '#F4A460'; tp.t1bg = '#fac592'; tp.tc = '#333333'; break;
      case 'flying':      tp.brd_grd = '#aac5e8'; tp.bg_grd = '#c2d6f1'; tp.t1brd = '#aac5e8'; tp.t1bg = '#c2d6f1'; tp.tc = '#333333'; break;
      case 'psychic':     tp.brd_grd = '#ff899a'; tp.bg_grd = '#fcbac7'; tp.t1brd = '#ff899a'; tp.t1bg = '#fcbac7'; tp.tc = '#333333'; break;
      case 'bug':         tp.brd_grd = '#808000'; tp.bg_grd = '#9a9a3b'; tp.t1brd = '#808000'; tp.t1bg = '#9a9a3b'; break;
      case 'rock':        tp.brd_grd = '#8B4513'; tp.bg_grd = '#96633f'; tp.t1brd = '#8B4513'; tp.t1bg = '#96633f'; break;
      case 'ghost':       tp.brd_grd = '#483D8B'; tp.bg_grd = '#605893'; tp.t1brd = '#483D8B'; tp.t1bg = '#605893'; break;
      case 'dark':        tp.brd_grd = '#424242'; tp.bg_grd = '#828282'; tp.t1brd = '#424242'; tp.t1bg = '#828282'; break;
      case 'dragon':      tp.brd_grd = '#7B68EE'; tp.bg_grd = '#9c8df6'; tp.t1brd = '#7B68EE'; tp.t1bg = '#9c8df6'; break;
      case 'steel':       tp.brd_grd = '#bebebe'; tp.bg_grd = '#acacac'; tp.t1brd = '#bebebe'; tp.t1bg = '#acacac'; tp.tc = '#333333'; break;
      case 'fairy':       tp.brd_grd = '#ffbec8'; tp.bg_grd = '#ffcfd7'; tp.t1brd = '#ffbec8'; tp.t1bg = '#ffcfd7'; tp.tc = '#333333'; break;
      default:            tp.brd_grd = '#FFFFFF'; tp.bg_grd = '#FFFFFF'; tp.t1brd = '#FFFFFF'; tp.t1bg = '#FFFFFF'; tp.tc = '#333333'; break;
    }
    if (t2 !== '' &&  t2 !== null && t2 !== undefined ) {
      switch (t2.toLowerCase()) {
        case 'normal':      tp.t2brd = '#cccccc'; tp.t2bg = '#d8d8d8'; tp.tc = '#333333'; break;
        case 'fire':        tp.t2brd = '#DC143C'; tp.t2bg = '#e74e6c'; break;
        case 'water':       tp.t2brd = '#235fee'; tp.t2bg = '#628df4'; break;
        case 'grass':       tp.t2brd = '#27CB4F'; tp.t2bg = '#68db84'; break;
        case 'electric':    tp.t2brd = '#FFFF00'; tp.t2bg = '#e8e868'; tp.tc = '#333333'; break;
        case 'ice':         tp.t2brd = '#98e4ff'; tp.t2bg = '#bef2ff'; tp.tc = '#333333'; break;
        case 'fighting':    tp.t2brd = '#800000'; tp.t2bg = '#923232'; break;
        case 'poison':      tp.t2brd = '#800080'; tp.t2bg = '#953695'; break;
        case 'ground':      tp.t2brd = '#F4A460'; tp.t2bg = '#fac592'; tp.tc = '#333333'; break;
        case 'flying':      tp.t2brd = '#aac5e8'; tp.t2bg = '#c2d6f1'; tp.tc = '#333333'; break;
        case 'psychic':     tp.t2brd = '#ff899a'; tp.t2bg = '#fcbac7'; tp.tc = '#333333'; break;
        case 'bug':         tp.t2brd = '#808000'; tp.t2bg = '#9a9a3b'; break;
        case 'rock':        tp.t2brd = '#8B4513'; tp.t2bg = '#96633f'; break;
        case 'ghost':       tp.t2brd = '#483D8B'; tp.t2bg = '#605893'; break;
        case 'dark':        tp.t2brd = '#424242'; tp.t2bg = '#828282'; break;
        case 'dragon':      tp.t2brd = '#7B68EE'; tp.t2bg = '#9c8df6'; break;
        case 'steel':       tp.t2brd = '#bebebe'; tp.t2bg = '#acacac'; tp.tc = '#333333'; break;
        case 'fairy':       tp.t2brd = '#ffbec8'; tp.t2bg = '#ffcfd7'; tp.tc = '#333333'; break;
        // default:            tp.t2brd = ''; tp.t2bg = ''; tp.tc = '#333333'; break;
      }
    }
    return tp;
  }


  // ================== VARIABLES ====================

  selectedPokemon = new Pokemon();
  tempPokemon: Pokemon = new Pokemon();

  typePalette = this.TypePalette()

  violation: any = {};

  viewPokemon = false;

  // ================== UI FUNCTIONS ====================


}
// ================== TEMPLATE ====================
</script>

<style scoped>
.poke-card {
  width: 320px; /* Fixed width */
  height: 100px; /* Fixed height */
}
</style>
