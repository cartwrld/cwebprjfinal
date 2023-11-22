<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome Buddies"/>
    <IconButton icon="discord" @party="showMessage('THIS IS FUN')"
                animation-style="spin" :animate="true">
      Anther Fun Button</IconButton>
    <PokeCard
      poke-i-d="1"
      poke-name="Cartavious"
      type1="Dragon"
      type2="Flying"
      sprite="https://imgur.com/CtkIAQO"/>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import IconButton from '@/components/IconButton.vue';
import PokeCard from '@/components/PokeCard.vue'; // @ is an alias to /src

@Component({
  components: {
    PokeCard,
    IconButton,
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  // eslint-disable-next-line class-methods-use-this
  showMessage(msg:string):void {
    alert(msg);
  }
}
</script>
