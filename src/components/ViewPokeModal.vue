<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Pokemon from "@/models/Pokemon";
import {capFirstLetter, TypePalette} from "@/services/utils";

@Component({
  methods: {capFirstLetter, TypePalette}
})
export default class ViewPokeModal extends Vue {

  @Prop() private displayPoke!: Pokemon;

  viewPokemon = false

  typePalette = TypePalette(this.displayPoke.pokeType1,this.displayPoke.pokeType2)


}
</script>

<template>
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
              {{ displayPoke.pokeID }}</span>
        </div>
        <!--          <div class="border border-dark bg-light rounded-5"> &lt;!&ndash; id container &ndash;&gt;-->
        <!--            <div class="rounded-5 fs-3 px-2 px-2"> &lt;!&ndash; id &ndash;&gt;-->
        <!--              <span class="p-0">10</span>-->
        <!--            </div>-->
        <!--          </div>-->
        <div class="d-flex justify-content-start"> <!-- name container -->
          <div class="fs-1"> <!-- name -->{{ capFirstLetter(displayPoke.pokeName) }}</div>
        </div>


        <div class="d-flex justify-content-center align-items-center">
          <!-- gen outer container -->
          <div
            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">
            <!-- hp container -->
            <span class="fw-bold">GEN</span>
            <span class="fw-semibold fs-5"><!-- hp num -->{{ displayPoke.gen }}</span>
          </div>

        </div>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <div> <!-- img + types -->
        <div
          :style="{ background: typePalette.bg_grd}"
          class="d-flex justify-content-around align-items-center p-2 mb-2 rounded-3 shadow-sm border">
          <!-- img container -->
          <img v-bind:src="displayPoke.sprite" alt="pokemon" width="350px" class="rounded shadow-sm bg-light">

        </div>
        <div class="d-flex justify-content-around align-items-center py-2">
          <!-- types container -->
          <div
            :style="{ background: typePalette.t1brd, color: typePalette.tc}"
            class="d-flex justify-content-center align-items-center border col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm">
            <!-- type1 container -->
            <span class="py-1"><!-- type1 -->{{ capFirstLetter(displayPoke.pokeType1) }}</span>
          </div>
          <div
            :style="{ background: typePalette.t2brd, color: typePalette.tc}"
            class="d-flex justify-content-center align-items-center border col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm"
            v-if="displayPoke.pokeType2">
            <!-- type2 container -->
            <span class="py-1"><!-- type2 -->{{ capFirstLetter(displayPoke.pokeType2) }}</span>
          </div>
        </div>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-around w-75"> <!-- stats outer container -->

        <div
          class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">
          <!-- hp container -->
          <span class="fw-bold">HP</span>
          <span class="fw-semibold fs-5"><!-- hp num -->{{ displayPoke.hp }}</span>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 mx-2 shadow-sm">
          <!-- atk container -->
          <span class="fw-bold">ATK</span>
          <span class="fw-semibold fs-5"><!-- atk num -->{{ displayPoke.atk }}</span>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 me-1 shadow-sm">
          <!-- def container -->
          <span class="fw-bold">DEF</span>
          <span class="fw-semibold fs-5"><!-- def num -->{{ displayPoke.def }}</span>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
          <!-- spatk container -->
          <span class="fw-bold">SPATK</span>
          <span class="fw-semibold fs-5"><!-- spatk num -->{{ displayPoke.spatk }}</span>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 mx-2 shadow-sm">
          <!-- spdef container -->
          <span class="fw-bold">SPDEF</span>
          <span class="fw-semibold fs-5"><!-- spdef num -->{{ displayPoke.spdef }}</span>
        </div>
        <div
          class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 shadow-sm">
          <!-- spd container -->
          <span class="fw-bold">SPD</span>
          <span class="fw-semibold fs-5"><!-- spd num -->{{ displayPoke.spd }}</span>
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

</template>

<style scoped>

</style>
