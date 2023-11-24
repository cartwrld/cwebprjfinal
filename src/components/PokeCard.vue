<template>
  <div class="d-flex justify-content-center col-3 p-0">

    <b-button :variant="variant" @click="$emit('viewpoke')">

      <div class="d-flex justify-content-around bg-danger rounded-4 py-1 px-3 m-0 shadow">
        <div class="d-flex justify-content-center align-items-center">
          <span class="bg-light p-2 px-3 rounded-5 border fw-semibold h4 pe-3 text-dark shadow-sm">
            {{pokeID}}</span>
        </div>
        <div class="d-flex justify-content-center align-items-center text-light">
          <h2 class="p-2 rounded fw-semibold mx-4 text-shadow">{{pokeName}}</h2>
        </div>
        <div class="d-flex flex-column justify-content-around">
          <span class="bg-light p-2 py-1 my-2 rounded fw-semibold text-dark shadow-sm">
            {{ type1 }}</span>
          <span class="bg-light p-2 py-1 my-2 rounded fw-semibold text-dark shadow-sm">
            {{ type2 }}</span>
        </div>
      </div>
    </b-button>
  </div>
</template>

<script lang="ts">
import {
  Component, Prop, Mixins,
} from 'vue-property-decorator';
import GlobalMixin from '@/mixins/global-mixin';
import { BIcon } from 'bootstrap-vue';
import Pokemon from '@/models/Pokemon';

@Component({})
export default class PokeCard extends Mixins(GlobalMixin) {
  @Prop() private pokeID! : number;

  @Prop() private pokeName! : string;

  @Prop() private type1! : string;

  @Prop() private type2! : string;

  @Prop() private sprite! : string;

  @Prop() private variant! : string;

  // ======================================

  tempPokemon: Pokemon = new Pokemon()

  violation: any = {};

  // ======================================
}
</script>

<style scoped>

</style>
