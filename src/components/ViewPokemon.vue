<template>
  <div>

    <div class="d-flex flex-column align-items-center"> <!-- BASE -->

      <div class="d-flex justify-content-around align-items-center w-100">
        <!-- id + name + gen -->

        <div class="border border-dark bg-light rounded-5"> <!-- id container -->
          <div> <!-- id -->1</div>
        </div>
        <div class="d-flex justify-content-start"> <!-- name container -->
          <div> <!-- name -->Cartavious</div>
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
            <span><!-- type1 -->Fighting</span>
          </div>
          <div
            class="bg-light d-flex justify-content-center align-items-center border bg-light col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm">
            <!-- type2 container -->
            <span><!-- type2 -->Fighting</span>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PokeCard from '@/components/PokeCard.vue';

@Component({
  components: {  },
})
export default class ViewPokemon extends Vue {
  viewPokemon = false;

  showPokeModal():void {
    this.viewPokemon = true;
  }
}
</script>

<style scoped>

</style>
<script setup lang="ts">
</script>
