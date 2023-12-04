<script lang="ts">
import {
  Component, Prop, Mixins,
} from 'vue-property-decorator';
import {BIcon} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import Pokemon from '@/models/Pokemon';
// import r from '../models/Pokemon';

@Component({})
export default class PokeCard extends Mixins(GlobalMixin) {
  @Prop() private id!: number;
  @Prop() private username!: string;
  @Prop() private accessLevel!: string;
  @Prop() private token!: string;


  @Prop() private variant!: string;

  // ================== FUNCTIONS ====================
  capFirstLetter(val: string) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }

  showUserModal(): void {
    this.viewUser = true;
  }


  // ================== VARIABLES ====================

  // selectedPokemon = new User();
  // tempPokemon: User = new User();

  // violation: any = {};

  viewUser = false;

  // ================== UI FUNCTIONS ====================


}
// ================== TEMPLATE ====================
// TODO divider and then line up the name and access level in a box, make level caps and smaller

</script>
<template>
  <!--  <div class="d-flex justify-content-center p-0">-->
  <div class="d-flex justify-content-center p-0">

    <b-button

      class="p-2 rounded-2"
      :variant="variant"
      @click="showUserModal">

      <div
        class="rounded-4 p-1">

        <div
          class="d-flex justify-content-around rounded-4 py-1 px-3 m-0 shadow
                  poke-card px-0">
          <div class="d-flex justify-content-center align-items-center">
            <span
              class="bg-light p-2 px-3 rounded-5 border fw-semibold h5 pe-3 text-dark
                      shadow-sm">
              {{ id }}</span>
          </div>
          <div
            class="d-flex justify-content-center align-items-center">
            <h5 class="rounded fw-semibold mx-4 text-shadow py-4">
              {{ username }}</h5>



            <div class="d-flex flex-column justify-content-around">
            <span class="bg-light p-2 py-1 my-1 rounded fw-semibold text-dark shadow-sm">
              {{ accessLevel }}</span>
            </div>
          </div>
        </div>
      </div>
    </b-button>
    <!--    </div>-->

    <b-modal
      title="View Pokemon"
      ok-variant="success"
      cancel-variant="danger"
      v-model="viewUser">

      <div class="d-flex flex-column align-items-center"> <!-- BASE -->


      </div> <!-- close BASE -->

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
<style scoped>
.poke-card {
  width: 320px; /* Fixed width */
  height: 100px; /* Fixed height */
}
</style>
