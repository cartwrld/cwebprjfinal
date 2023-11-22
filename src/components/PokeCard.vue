<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class PokeCard extends Vue {
  @Prop() private pokeID! : number;

  @Prop() private pokeName! : string;

  @Prop() private type1! : string;

  @Prop() private type2! : string;

  @Prop() private sprite! : string;
}
</script>

<template>
  <div class="d-flex flex-column justify-content-center bg-danger rounded">
    <div class="bg-primary d-flex justify-content-around">
      <div id="id">
        <span>{{pokeID}}</span>
      </div>
      <div id="name">
        <span>{{pokeName}}</span>
      </div>
    </div>
    <div class="d-flex justify-content-center bg-danger">
      <div class="bg-light p-2 ">
        <img alt="pokepic" src="../assets/cartavious.png" width="250"/>
      </div>
    </div>
    <div class="d-flex justify-content-around bg-info">
      <div class="bg-light p-2 m-2">
        <span>{{ type1 }}</span>
      </div>
      <div class="bg-light p-2 m-2 border ">
        <span>{{ type2 }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
