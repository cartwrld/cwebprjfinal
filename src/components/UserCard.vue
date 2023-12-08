<template>
  <!--  <div class="d-flex justify-content-center p-0">-->
  <div class="d-flex justify-content-center p-0">

    <b-button

      class="p-2 rounded-2"
      :variant="variant"
      @click="showUserModal">

      <div
        class="rounded-4 p-1 bg-light">

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
            class="d-flex flex-column justify-content-center align-items-center w-100 ps-2">

            <div class="ps-1 w-100 text-start">
              <span class="rounded fw-semibold m-0 h3 text-shadow p-0 "> {{ username }}</span>
            </div>

            <div class="border border-1 w-75 my-1 me-5"></div>

            <div class="ps-1 w-100 text-start h6">
              <span class="">{{ accessLevel }}</span>
            </div>
          </div>
        </div>
      </div>
    </b-button>
    <!--    </div>-->

    <b-modal
      title="View User"
      v-model="viewUser"
      id="view-user-modal">

      <div class="d-flex flex-column align-items-center"> <!-- BASE -->

        <div class="d-flex justify-content-around align-items-center w-100">

          <div class="d-flex justify-content-center align-items-center  col-3 pt-1" >
                <span class="bg-light p-2 px-3 rounded-5 border fw-semibold h4 text-dark
                      shadow-sm "> {{ id }}</span>
          </div>

          <div class="d-flex justify-content-start  col-9">
            <div class="fs-3 fw-semibold">{{ username }}</div>
          </div>

        </div>

        <div class="border border-1 my-2 mb-3 w-100"></div>

        <div class="d-flex justify-content-between h4 align-items-center w-75 pb-2">
          <span class="d-flex fw-semibold fs-5">Access Level:</span>
          <span class="d-flex fw-semibold fs-5">{{ accessLevel }}</span>
        </div>


        <div class="d-flex justify-content-around w-75"> <!-- stats outer container -->

          <div
            class="mx-1 col-3 d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
            <span class="fw-bold fs-6 py-2 px-1">READ</span>
            <span class="mt-2 mb-3"
                  v-if="accessLevel === 'ADMIN' || accessLevel === 'WRITE' || accessLevel === 'READ'">
                  <b-icon-patch-check-fill variant="success" width="45" height="45"/></span>
            <span class="mt-2 mb-3" v-else>
                  <b-icon-patch-exclamation-fill variant="danger" width="45" height="45"/></span>
          </div>
          <div
            class="mx-1 col-3 d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
            <span class="fw-bold fs-6 py-2 px-1">WRITE</span>
            <span class="mt-2 mb-3" v-if="accessLevel === 'ADMIN' || accessLevel == 'WRITE'">
                  <b-icon-patch-check-fill variant="success" width="45" height="45"/></span>
            <span class="mt-2 mb-3" v-else>
                  <b-icon-patch-exclamation-fill variant="danger" width="45" height="45"/></span>
          </div>
          <div
            class="mx-1 col-3 d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
            <span class="fw-bold fs-6 py-2 px-1">UPDATE</span>
            <span class="mt-2 mb-3" v-if="accessLevel === 'ADMIN'">
                  <b-icon-patch-check-fill variant="success" width="45" height="45"/></span>
            <span class="mt-2 mb-3" v-else>
                  <b-icon-patch-exclamation-fill variant="danger" width="45" height="45"/></span>
          </div>
          <div
            class="mx-1 col-3 d-flex flex-column justify-content-center align-items-center border bg-light rounded-3 px-2 ms-1 shadow-sm">
            <span class="fw-bold fs-6 py-2 px-1">DELETE</span>
            <span class="mt-2 mb-3" v-if="accessLevel === 'ADMIN'">
                  <b-icon-patch-check-fill variant="success" width="45" height="45"/></span>
            <span class="mt-2 mb-3" v-else>
                  <b-icon-patch-exclamation-fill variant="danger" width="45" height="45"/></span>
          </div>


        </div>


      </div> <!-- close BASE -->

      <!--      <div class="d-flex justify-content-center align-items-center">-->

<!--      <b-button-group class="w-100 mt-4 shadow-sm">-->
<!--        <b-button variant="primary" :disabled="isDisabled" @click="done">-->
<!--          <b-icon-cloud-arrow-up-fill ref="iconEdit"  class="me-2"/>-->
<!--          Edit Pokemon-->
<!--        </b-button>-->
<!--      </b-button-group>-->
<!--      <b-button-group class="w-100 mt-4 shadow-sm">-->
<!--        <b-button variant="success" :disabled="isDisabled" @click="done">-->
<!--          <b-icon-check2-square ref="iconEdit"  class="me-2"/>-->
<!--          Done-->
<!--        </b-button>-->
<!--      </b-button-group>-->
      <!-- Custom Footer -->
      <template #modal-footer>
        <!-- Custom button to close the modal -->
        <b-button class="w-100 mt-0 shadow-sm" variant="success" @click="done">
          <b-icon-check2-all class="me-2"/> <!-- Using a check icon for "Done" -->
          Done
        </b-button>
      </template>

      <!--      </div>-->
    </b-modal>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Mixins,
} from 'vue-property-decorator';
import {BIcon} from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import Pokemon from '@/models/Pokemon';
import {BIconPatchCheckFill, BIconPatchExclamationFill} from 'bootstrap-vue'
// import r from '../models/Pokemon';

@Component({})
export default class PokeCard extends Mixins(GlobalMixin) {
  @Prop() private id!: number;
  @Prop() private username!: string;
  @Prop() private accessLevel!: string;
  @Prop() private token!: string;


  @Prop() private variant!: string;


  // ================== FUNCTIONS ====================


  showUserModal(): void {
    this.viewUser = true;
  }


  // ================== VARIABLES ====================

  // selectedPokemon = new User();
  // tempPokemon: User = new User();

  // violation: any = {};

  done(): void {
    this.$bvModal.hide('view-user-modal');
  }


  viewUser = false;

  // ================== UI FUNCTIONS ====================


}
// ================== TEMPLATE ====================
// TODO divider and then line up the name and access level in a box, make level caps and smaller

</script>

<style scoped>
.poke-card {
  width: 320px; /* Fixed width */
  height: 100px; /* Fixed height */
}
</style>
