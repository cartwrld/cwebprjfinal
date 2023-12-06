<template>
  <div class="d-flex justify-content-center col-12 p-0">

    <b-button
      class="p-2 rounded-2"
      :variant="variant"
      @click="showTeamModal">
      <div
        class="d-flex justify-content-around bg-danger rounded-4 py-1 px-3 m-0 shadow
        px-0 team-card">
        <div class="d-flex justify-content-center align-items-center">
          <span
            class="bg-light p-2 px-3 rounded-5 border fw-semibold h5 pe-3 text-dark
            shadow-sm">
            {{ teamID }}</span>
        </div>
        <div class="d-flex justify-content-center align-items-center text-light">
          <h5 class="rounded fw-semibold mx-4 text-shadow py-4">
            {{ teamName }}</h5>
        </div>
        <div class="d-flex no-wrap justify-content-around py-2">
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img :src="sprite1" alt="poke" width="100px" class="rounded-1 shadow"/>

          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img

              :src="sprite2"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img

              :src="sprite3"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img

              :src="sprite4"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img

              :src="sprite5"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img
              :src="sprite6"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
        </div>
        <div>
          <!--          <span>{{ sprite1 }}</span>-->
          <!--          <span>{{ sprite2 }}</span>-->
          <!--          <span>{{ sprite3 }}</span>-->
          <!--          <span>{{ sprite4 }}</span>-->
          <!--          <span>{{ sprite5 }}</span>-->
          <!--          <span>{{ sprite6 }}</span>-->
        </div>
      </div>
    </b-button>

    <b-modal
      title="View PokeTeam"
      ok-variant="success"
      cancel-variant="danger"
      v-model="viewPokeTeam">

      <!--      <div class="d-flex flex-column align-items-center"> &lt;!&ndash; BASE &ndash;&gt;-->

      <!--        <div class="d-flex justify-content-around align-items-center w-100">-->
      <!--          &lt;!&ndash; id + name + gen &ndash;&gt;-->

      <!--          <div class="d-flex justify-content-center align-items-center">-->
      <!--            <span-->
      <!--              class="bg-light p-2 px-3 rounded-5 border fw-semibold h3 pe-3 text-dark-->
      <!--                      shadow-sm">-->
      <!--              {{ teamID }}</span>-->
      <!--          </div>-->
      <!--          &lt;!&ndash;          <div class="border border-dark bg-light rounded-5"> &lt;!&ndash; id container &ndash;&gt;&ndash;&gt;-->
      <!--          &lt;!&ndash;            <div class="rounded-5 fs-3 px-2 px-2"> &lt;!&ndash; id &ndash;&gt;&ndash;&gt;-->
      <!--          &lt;!&ndash;              <span class="p-0">10</span>&ndash;&gt;-->
      <!--          &lt;!&ndash;            </div>&ndash;&gt;-->
      <!--          &lt;!&ndash;          </div>&ndash;&gt;-->
      <!--          <div class="d-flex justify-content-start"> &lt;!&ndash; name container &ndash;&gt;-->
      <!--            <div class="fs-1"> &lt;!&ndash; name &ndash;&gt;{{ teamName }}</div>-->
      <!--          </div>-->


      <!--          <div class="d-flex justify-content-center align-items-center">-->
      <!--            &lt;!&ndash; gen outer container &ndash;&gt;-->
      <!--            <div-->
      <!--              class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">-->
      <!--              &lt;!&ndash; hp container &ndash;&gt;-->
      <!--              <span class="fw-bold">GEN</span>-->
      <!--              <span class="fw-semibold fs-5">&lt;!&ndash; hp num &ndash;&gt;{{ poke1 }}</span>-->
      <!--            </div>-->

      <!--          </div>-->
      <!--        </div>-->

      <!--        <div class="border border-1 my-3 w-100"></div>-->

      <!--        <div> &lt;!&ndash; img + types &ndash;&gt;-->
      <!--          <div-->
      <!--            :style="{ background: typePalette.bg_grd}"-->
      <!--            class="d-flex justify-content-around align-items-center p-2 mb-2 rounded-3 shadow-sm border">-->
      <!--            &lt;!&ndash; img container &ndash;&gt;-->
      <!--            <img v-bind:src="sprite" alt="pokemon" width="350px" class="rounded shadow-sm bg-light" >-->

      <!--          </div>-->
      <!--          <div class="d-flex justify-content-around align-items-center py-2">-->
      <!--            &lt;!&ndash; types container &ndash;&gt;-->
      <!--            <div-->
      <!--              :style="{ background: typePalette.t1brd, color: typePalette.tc}"-->
      <!--              class="d-flex justify-content-center align-items-center border col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm">-->
      <!--              &lt;!&ndash; type1 container &ndash;&gt;-->
      <!--              <span class="py-1">&lt;!&ndash; type1 &ndash;&gt;{{ capFirstLetter(pokeType1) }}</span>-->
      <!--            </div>-->
      <!--            <div-->
      <!--              :style="{ background: typePalette.t2brd, color: typePalette.tc}"-->
      <!--              class="d-flex justify-content-center align-items-center border col-5 fs-5 fw-semibold pb-1 rounded-3 shadow-sm"-->
      <!--              v-if="pokeType2">-->
      <!--              &lt;!&ndash; type2 container &ndash;&gt;-->
      <!--              <span class="py-1">&lt;!&ndash; type2 &ndash;&gt;{{ capFirstLetter(pokeType2) }}</span>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->

      <!--        <div class="border border-1 my-3 w-100"></div>-->

      <!--        <div class="d-flex justify-content-around w-75"> &lt;!&ndash; stats outer container &ndash;&gt;-->

      <!--          <div-->
      <!--            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 py-1 shadow-sm">-->
      <!--            &lt;!&ndash; hp container &ndash;&gt;-->
      <!--            <span class="fw-bold">HP</span>-->
      <!--            <span class="fw-semibold fs-5">&lt;!&ndash; hp num &ndash;&gt;{{ hp }}</span>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 mx-2 shadow-sm">-->
      <!--            &lt;!&ndash; atk container &ndash;&gt;-->
      <!--            <span class="fw-bold">ATK</span>-->
      <!--            <span class="fw-semibold fs-5">&lt;!&ndash; atk num &ndash;&gt;{{ atk }}</span>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 me-1 shadow-sm">-->
      <!--            &lt;!&ndash; def container &ndash;&gt;-->
      <!--            <span class="fw-bold">DEF</span>-->
      <!--            <span class="fw-semibold fs-5">&lt;!&ndash; def num &ndash;&gt;{{ def }}</span>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">-->
      <!--            &lt;!&ndash; spatk container &ndash;&gt;-->
      <!--            <span class="fw-bold">SPATK</span>-->
      <!--            <span class="fw-semibold fs-5">&lt;!&ndash; spatk num &ndash;&gt;{{ spatk }}</span>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 mx-2 shadow-sm">-->
      <!--            &lt;!&ndash; spdef container &ndash;&gt;-->
      <!--            <span class="fw-bold">SPDEF</span>-->
      <!--            <span class="fw-semibold fs-5">&lt;!&ndash; spdef num &ndash;&gt;{{ spdef }}</span>-->
      <!--          </div>-->
      <!--          <div-->
      <!--            class="d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-3 shadow-sm">-->
      <!--            &lt;!&ndash; spd container &ndash;&gt;-->
      <!--            <span class="fw-bold">SPD</span>-->
      <!--            <span class="fw-semibold fs-5">&lt;!&ndash; spd num &ndash;&gt;{{ spd }}</span>-->
      <!--          </div>-->

      <!--        </div>-->

      <!--      </div> &lt;!&ndash; close BASE &ndash;&gt;-->

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
import { BIcon } from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import PokeTeam from '@/models/PokeTeam';

@Component({})
export default class TeamCard extends Mixins(GlobalMixin) {
  @Prop() private teamID!: number;
  @Prop() private teamName!: string;
  @Prop() private poke1!: number;
  @Prop() private poke2!: number;
  @Prop() private poke3!: number;
  @Prop() private poke4!: number;
  @Prop() private poke5!: number;
  @Prop() private poke6!: number;
  @Prop() private spriteURLs!: string[];

  @Prop() private sprite1!: string;
  @Prop() private sprite2!: string;
  @Prop() private sprite3!: string;
  @Prop() private sprite4!: string;
  @Prop() private sprite5!: string;
  @Prop() private sprite6!: string;
  @Prop() private variant!: string;

  // capFirstLetter(val: string) {
  //   return val.charAt(0).toUpperCase() + val.slice(1);
  // }

  // async getPokemonImage(id: string): Promise<string> {
  //   const response = await fetch(`http://localhost:3004/pokemon/${id}`);
  //   const data = await response.json();
  //   console.log(data)
  //
  //   return 'https://i.imgur.com/CtkIAQO.png';
  // }

  showTeamModal(): void {
    this.viewPokeTeam = true;
  }

  // ======================================

  tempPokeTeam: PokeTeam = new PokeTeam();

  violation: any = {};

  isBusy = false;

  viewPokeTeam = false;

  // ======================================
}
</script>

<style scoped>

</style>
