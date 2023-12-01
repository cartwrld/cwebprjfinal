<template>
  <div>

    <PokeCard
      variant="light"
      poke-i-d="1"
      poke-name="Cartavious"
      type1="Dragon"
      type2="Flying"
      sprite="https://imgur.com/CtkIAQO"
      @viewpoke="showPokeModal()"
    />
    <ViewPokemon
      @ok="savePokemon"
      v-model="viewPokemon"
    />
    <b-modal title="View Pokemon" ok-variant="success" cancel-variant="danger"
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

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import PokeCard from '@/components/PokeCard.vue';

@Component({
  components: { PokeCard },
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
