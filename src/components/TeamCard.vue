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

  @Prop() private poke1!: string;

  @Prop() private poke2!: string;

  @Prop() private poke3!: string;

  @Prop() private poke4!: string;

  @Prop() private poke5!: string;

  @Prop() private poke6!: string;

  @Prop() private variant!: string;

  // capFirstLetter(val: string) {
  //   return val.charAt(0).toUpperCase() + val.slice(1);
  // }

  async getPokemonImage(id: string): Promise<string> {
    const response = await fetch(`http://localhost:3004/pokemon/${id}`);
    const data = await response.json();
    return data.sprite;
  }

  // ======================================

  tempPokemon: PokeTeam = new PokeTeam();

  violation: any = {};

  // ======================================
}
</script>
<template>
  <div class="d-flex justify-content-center col-12 p-0">

    <b-button
      :variant="variant"
      @click="$emit('viewteam')"
      class="col-12">
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
            <img
              :src="getPokemonImage(poke1)"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img
              :src="getPokemonImage(poke2)"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img
              :src="getPokemonImage(poke3)"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img
              :src="getPokemonImage(poke4)"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img
              :src="getPokemonImage(poke5)"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light
          mx-1 shadow">
            <img
              :src="getPokemonImage(poke6)"
              alt="poke"
              width="100px"
              class="rounded-1 shadow"/>
          </div>
        </div>
        <div>
          <span>{{ poke1 }}</span>
          <span>{{ poke2 }}</span>
          <span>{{ poke3 }}</span>
          <span>{{ poke4 }}</span>
          <span>{{ poke5 }}</span>
          <span>{{ poke6 }}</span>
        </div>
      </div>
    </b-button>

  </div>
</template>
<style scoped>

</style>
