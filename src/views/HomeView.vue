<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome Buddies"/>
    <IconButton icon="discord" @party="showMessage('THIS IS FUN')"
                animation-style="spin" :animate="true">
      Anther Fun Button</IconButton>
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

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import IconButton from '@/components/IconButton.vue';
import PokeCard from '@/components/PokeCard.vue';
import ViewPokemon from '@/components/ViewPokemon.vue';
import { BIcon } from 'bootstrap-vue';
import Student from '@/models/Student'; // @ is an alias to /src

@Component({
  components: {
    ViewPokemon,
    PokeCard,
    IconButton,
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  viewPokemon = false;

  // eslint-disable-next-line class-methods-use-this
  showMessage(msg:string):void {
    alert(msg);
  }

  showPokeModal():void {
    this.viewPokemon = true;
  }
}
</script>
