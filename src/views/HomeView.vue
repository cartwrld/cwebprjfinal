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
      v-model="view"
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
  // eslint-disable-next-line class-methods-use-this
  showMessage(msg:string):void {
    alert(msg);
  }

  showPokeModal():void {
    // <ViewPokemon />
  }

  savePokemon() {
    const icon:BIcon = this.$refs.iconSave; // get the icon to animate from the vue refs https://vuejs.org/v2/api/#ref
    this.setBusy(true);// tell parent that this component is waiting for the api to respond
    this.animate(icon, true);// animate the icon in the clicked button to give the user an indication that some thing is happening
    this.violation = {};// empty out violation messages - to hide violation message from user and wait for new violations from the api

    // use the method declared in the student mixin to call the student api
    // if the student is new POST , if the student already exists then PUT
    const url = this.STUDENT_API + (this.isNew ? '' : `/${this.tempStudent.id}`);
    const method = this.isNew ? 'post' : 'put';

    this.callAPI(url, method, this.tempStudent) // returns a promise object
      .then((data) => {
        // determine if the student was added or updated
        this.$emit(this.tempStudent.id === data.id ? 'updated' : 'added', data);
      })
      .catch((err) => {
        // get the violation messages from the api - if the web server responded
        this.violation = err.data || {};
      })
      .finally(() => {
        this.setBusy(false);// tell parent that this component is no longer waiting for the api
        this.animate(icon, false);// stop the icon animation
      });
  }
}
</script>
