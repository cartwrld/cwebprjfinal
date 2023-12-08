<template>
  <div class="">
    <div class="">
      <!-- TEAM ID -->
      <b-form-group :invalid-feedback="violation.teamID" :state="hasErr.teamID" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded">

            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.tid" class="d-flex">
              <b-icon-hash :title="dt.tid" class=""/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.tid"
                        v-model="tempTeam.teamID"
                        :state="hasErr.teamID"
                        :disabled="isDisabled"
                        trim
                        @keydown="violation.teamID = null"
          />
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>


      <!-- NAME -->
      <b-form-group :invalid-feedback="violation.teamName" :state="hasErr.teamName" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded ">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.name" class="d-flex">
              <b-icon-people-fill :title="dt.name"/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.name"
                        :state="hasErr.teamName"
                        :disabled="isDisabled"
                        v-model="tempTeam.teamName"
                        trim
                        @keydown="violation.teamName = null"/>
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-between">
        <div class="d-flex flex-wrap col-5">


        <!-- POKE 1 -->
        <b-form-group :invalid-feedback="violation.poke1" :state="hasErr.poke1"
                      class="mb-1">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p1" class="d-flex">
                <b-icon-person-fill :title="dt.p1"/>
              </b-input-group-prepend>
            </div>
            <b-form-input class="rounded shadow-sm"
                          :placeholder="dt.p1"
                          :state="hasErr.poke1"
                          :disabled="isDisabled"
                          v-model="tempTeam.poke1"
                          trim
                          @keydown="violation.poke1 = null"/>
          </b-input-group>
        </b-form-group>

        <!-- POKE 2 -->
        <b-form-group :invalid-feedback="violation.poke2" :state="hasErr.poke2"
                      class="mb-1">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p2" class="d-flex">
                <b-icon-person-fill :title="dt.p2"/>
              </b-input-group-prepend>
            </div>
            <b-form-input class="rounded shadow-sm"
                          :placeholder="dt.p2"
                          :state="hasErr.poke2"
                          :disabled="isDisabled"
                          v-model="tempTeam.poke2"
                          trim
                          @keydown="violation.poke2 = null"/>
          </b-input-group>
        </b-form-group>

        <!-- POKE 3 -->
        <b-form-group :invalid-feedback="violation.poke3" :state="hasErr.poke3"
                      class="mb-1">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p3" class="d-flex">
                <b-icon-person-fill :title="dt.p3"/>
              </b-input-group-prepend>
            </div>
            <b-form-input class="rounded shadow-sm"
                          :placeholder="dt.p3"
                          :state="hasErr.poke3"
                          :disabled="isDisabled"
                          v-model="tempTeam.poke3"
                          trim
                          @keydown="violation.poke3 = null"/>
          </b-input-group>
        </b-form-group>
        </div>
          <div class="d-flex flex-wrap col-5">

        <!-- POKE 4 -->
        <b-form-group :invalid-feedback="violation.poke4" :state="hasErr.poke4"
                      class="mb-1">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p4" class="d-flex">
                <b-icon-person-fill :title="dt.p4"/>
              </b-input-group-prepend>
            </div>
            <b-form-input class="rounded shadow-sm"
                          :placeholder="dt.p4"
                          :state="hasErr.poke4"
                          :disabled="isDisabled"
                          v-model="tempTeam.poke4"
                          trim
                          @keydown="violation.poke4 = null"/>
          </b-input-group>
        </b-form-group>

        <!-- POKE 5 -->
        <b-form-group :invalid-feedback="violation.poke5" :state="hasErr.poke5"
                      class="mb-1">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p5" class="d-flex">
                <b-icon-person-fill :title="dt.p5"/>
              </b-input-group-prepend>
            </div>
            <b-form-input class="rounded shadow-sm"
                          :placeholder="dt.p5"
                          :state="hasErr.poke5"
                          :disabled="isDisabled"
                          v-model="tempTeam.poke5"
                          trim
                          @keydown="violation.poke5 = null"/>
          </b-input-group>
        </b-form-group>

        <!-- POKE 6 -->
        <b-form-group :invalid-feedback="violation.poke6" :state="hasErr.poke6"
                      class="mb-1">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p6" class="d-flex">
                <b-icon-person-fill :title="dt.p6"/>
              </b-input-group-prepend>
            </div>
            <b-form-input class="rounded shadow-sm"
                          :placeholder="dt.p6"
                          :state="hasErr.poke6"
                          :disabled="isDisabled"
                          v-model="tempTeam.poke6"
                          trim
                          @keydown="violation.poke6 = null"/>
          </b-input-group>
        </b-form-group>
        </div>
      </div>


      <div class="border border-1 my-3 w-100"></div>

      <!-- BUTTONS -->
      <b-button-group class="w-100 mb-3">
        <b-button variant="primary" :disabled="isDisabled" @click="saveTeam">
          <b-icon-cloud-arrow-up-fill ref="iconSave"/>
          Save PokeTeam
        </b-button>
        <b-button variant="danger" :disabled="isDisabled" @click="cancel">
          <b-icon-x-square-fill/>
          Cancel
        </b-button>
      </b-button-group>

      <!-- DELETE CONFIRM -->
      <!-- Modify the delete confirmation modal content accordingly -->

      <!-- ERROR MESSAGE -->
      <b-alert variant="danger" :show="violation.violationMessage">
        {{ violation.violationMessage }}
      </b-alert>

      <!-- DEBUG INFO -->
      <b-alert variant="secondary" dismissible :show="debug">
      <pre>
        PROPS:
        {{ $props }}
        DATA:
        {{ $data }}
      </pre>
      </b-alert>
    </div>
  </div>
</template>

<script lang="ts">

/* eslint-disable max-len */
import {
  Component, Mixins, Prop, Watch,
} from 'vue-property-decorator';
import { BIcon } from 'bootstrap-vue';
import Pokemon from '@/models/Pokemon';
import GlobalMixin from '@/mixins/global-mixin';
import PokeTeam from '@/models/PokeTeam';

@Component
export default class PokeTeamForm extends Mixins(GlobalMixin) {
  @Prop({
    type: Object,
    validator: (s) => s instanceof Object
  }) readonly poketeam: any;
  @Prop() private pokeList!: Pokemon[];

  $refs!: {
    iconDelete: BIcon
    iconSave: BIcon
  };

  // token = 'iHaveWriteAccess';

  token = localStorage.getItem('authToken');

  checkForToken() {
    if (this.token !== 'iHaveAdminAccess') {
      console.log("token is broken")
      console.log(this.token)
    }
  }




  // region DATA VARIABLES
  // will store a copy of the values from the pokemon declared in the props section
  tempTeam: PokeTeam = new PokeTeam();

  violation: any = {}; // will store violation messages that we get from the api

  dt = {
    // Display Text - object that stores text to display to the user instead of the attribute names
    tid: 'Team ID',
    name: 'Team Name',
    p1: 'Pokemon 1',
    p2: 'Pokemon 2',
    p3: 'Pokemon 3',
    p4: 'Pokemon 4',
    p5: 'Pokemon 5',
    p6: 'Pokemon 6',
  };
  // endregion

  // region METHODS

  // Method to update types and ensure they are different

  getPokemonIdByName(pokemonName: string): number {
    console.log("poke in getPokemonIDbyName:");
    console.log(this.tempTeam.poke1);
    const foundPokemon = this.pokeList.find(pokemon => pokemon.pokeName?.toLowerCase() === pokemonName.toLowerCase());

    // Use optional chaining to safely access the property
    return foundPokemon?.pokeID ?? 0;
  }

  saveTeam() {

    this.checkForToken()

    // Initialize properties with default values
    this.tempTeam.teamID = this.tempTeam.teamID !== undefined ? this.tempTeam.teamID : 0;

    console.log("poke1 in saveTeam:");
    console.log(this.tempTeam.poke1);
    console.log(this.tempTeam.poke2);
    console.log(this.tempTeam.poke3);
    console.log(this.tempTeam.poke4);
    console.log(this.tempTeam.poke5);
    console.log(this.tempTeam.poke6);

    // const tempId = this.getPokemonIdByName(this.tempTeam.poke1 + "");
    //
    // this.tempTeam.poke1 = this.getPokemonIdByName(this.tempTeam.poke1 + "");
    // this.tempTeam.poke1 = this.tempTeam.poke1 !== undefined ? this.tempTeam.poke1 : 0;
    // this.tempTeam.poke2 = this.tempTeam.poke2 !== undefined ? this.tempTeam.poke2 : 0;
    // this.tempTeam.poke3 = this.tempTeam.poke3 !== undefined ? this.tempTeam.poke3 : 0;
    // this.tempTeam.poke4 = this.tempTeam.poke4 !== undefined ? this.tempTeam.poke4 : 0;
    // this.tempTeam.poke5 = this.tempTeam.poke5 !== undefined ? this.tempTeam.poke5 : 0;
    // this.tempTeam.poke6 = this.tempTeam.poke6 !== undefined ? this.tempTeam.poke6 : 0;

 // Convert string values to numbers
    this.tempTeam.poke1 = this.getPokemonIdByName(this.tempTeam.poke1 + "");
    this.tempTeam.poke2 = this.getPokemonIdByName(this.tempTeam.poke2 + "");
    this.tempTeam.poke3 = this.getPokemonIdByName(this.tempTeam.poke3 + "");
    this.tempTeam.poke4 = this.getPokemonIdByName(this.tempTeam.poke4 + "");
    this.tempTeam.poke5 = this.getPokemonIdByName(this.tempTeam.poke5 + "");
    this.tempTeam.poke6 = this.getPokemonIdByName(this.tempTeam.poke6 + "");


 // Ensure other properties are not undefined and assign default values if needed
    this.tempTeam.teamName = this.tempTeam.teamName || '';


    const icon: BIcon = this.$refs.iconSave; // get the icon to animate from the vue refs https://vuejs.org/v2/api/#ref
    this.setBusy(true);// tell parent that this component is waiting for the api to respond
    this.animate(icon, true);// animate the icon in the clicked button to give the user an indication that some thing is happening
    this.violation = {};// empty out violation messages - to hide violation message from user and wait for new violations from the api

    // use the method declared in the pokemon mixin to call the pokemon api
    // if the pokemon is new POST , if the pokemon already exists then PUT
    const url = this.POKETEAM_API + (this.isNew ? '' : `/${this.tempTeam.teamID}`);
    const method = this.isNew ? 'post' : 'put';

    // console.log(this.tempPokemon);

    this.callAPI(url, method, this.tempTeam, localStorage.getItem('authToken')) // returns a promise object
      .then((data) => {
        // determine if the pokemon was added or updated
        this.$emit(this.tempTeam.teamID === data.id ? 'updated' : 'added', data);
      })
      .catch((err) => {
        // get the violation messages from the api - if the web server responded
        this.violation = err.data || {};
      })
      .finally(() => {
        this.setBusy(false);// tell parent that this component is no longer waiting for the api
        this.animate(icon, false);// stop the icon animation

        window.location.reload();
      });
  }

  cancel() {
    this.violation = {}; // clear out violation messages and as a result the hasErrs will be null
    this.tempTeam = { ...this.tempTeam };// copy the pokemon values to a new temp pokemon
    this.$emit('cancelled', this.tempTeam); // tell parent that cancel was called
  }

  animate(icon: BIcon, start: boolean) {
    if (start) {
      // apply animation style to the icon
      icon.classList.add('b-icon-animation-cylon-vertical');
    } else {
      // remove animation style from the icon
      icon.classList.remove('b-icon-animation-cylon-vertical');
    }
  }

  // endregion

  // region COMPUTED PROPERTIES
  get hasErr(): any {
    return { // bootstrap hasErrs used to display violation messages
      // true - green border, false - red border, null- regular border
      teamID: this.violation.teamID ? false : null,
      teamName: this.violation.teamName ? false : null,
      poke1: this.violation.poke1 ? false : null,
      poke2: this.violation.poke2 ? false : null,
      poke3: this.violation.poke3 ? false : null,
      poke4: this.violation.poke4 ? false : null,
      poke5: this.violation.poke5 ? false : null,
      poke6: this.violation.poke6 ? false : null,
    };
  }

  get isNew(): boolean {
    // if pokemonID is null, 0 , '' then it's a new pokemon not an existing pokemon
    return !this.poketeam || !this.poketeam.teamID;
  }

  // endregion

  // region WATCHES execute code when a data variable or prop is modified by processes in the application
  @Watch('poketeam', { deep: true })// watch all attributes of the pokemon object - if any attribute changes then execute the handler
  onPokeTeamChanged(newTeam: PokeTeam, oldTeam: PokeTeam) { // execute this function when the pokemon object in the props section changes
    if (!newTeam || !newTeam.teamID) {
      // if new pokemon is null or doesn't have an id
      this.tempTeam = new PokeTeam();// clear out temporary pokemon
    } else if (!oldTeam || newTeam.teamID !== oldTeam.teamID) {
      // if old pokemon is null or new pokemon is not the same as old pokemon
      // COPY VALUES from the pokemon prop into new a temp pokemon object
      this.tempTeam = Object.assign(new PokeTeam(), this.poketeam);
    }
    this.violation = {};// empty out violation messages - to hide them from the user
  }
}
</script>

<style scoped>

</style>

