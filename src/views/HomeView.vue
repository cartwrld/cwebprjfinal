<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome Buddies"/>
    <IconButton
      icon="discord"
      @party="showPokeModal()"
      animation-style="spin"
      :animate="true">
      Another Fun Button
    </IconButton>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BIcon } from 'bootstrap-vue';
import HelloWorld from '@/components/HelloWorld.vue';
import IconButton from '@/components/IconButton.vue';
import PokeCard from '@/components/PokeCard.vue';
import ViewPokemon from '@/components/ViewPokemon.vue';
import Student from '@/models/Student'; // @ is an alias to /src

@Component({
  components: {
    IconButton,
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  viewPokemon = false;

  // eslint-disable-next-line class-methods-use-this
  showMessage(msg: string): void {
    // alert(msg);
  }

  showPokeModal(): void {
    this.viewPokemon = true;
  }
}
</script>
