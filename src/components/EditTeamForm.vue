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
export default class EditTeamForm extends Mixins(GlobalMixin) {
  @Prop() private teamID!: number;
  @Prop() private teamName!: string;
  @Prop() private poke1!: number;
  @Prop() private poke2!: number;
  @Prop() private poke3!: number;
  @Prop() private poke4!: number;
  @Prop() private poke5!: number;
  @Prop() private poke6!: number;
  @Prop() private pokeList!: Pokemon[];

  tempPokeTeam: PokeTeam = {
    teamID: this.teamID !== undefined ? this.teamID : 0,
    teamName: this.teamName || '',
    poke1: this.poke1 !== undefined ? this.poke1 : 0,
    poke2: this.poke2 !== undefined ? this.poke2 : 0,
    poke3: this.poke3 !== undefined ? this.poke3 : 0,
    poke4: this.poke4 !== undefined ? this.poke4 : 0,
    poke5: this.poke5 !== undefined ? this.poke5 : 0,
    poke6: this.poke6 !== undefined ? this.poke6 : 0,
  };

  tempPoke1: String = this.poke1 + "";
  tempPoke2: String = this.poke2 + "";
  tempPoke3: String = this.poke3 + "";
  tempPoke4: String = this.poke4 + "";
  tempPoke5: String = this.poke5 + "";
  tempPoke6: String = this.poke6 + "";

  $refs!: {
    iconDelete: BIcon
    iconSave: BIcon
  };

  token = 'iHaveAdminAccess';
  // region DATA VARIABLES
  // will store a copy of the values from the pokemon declared in the props section

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

  mounted() {
    this.initializeTemporaryPokeTeam();
    this.mapPokemonNames();
  }

  mapPokemonNames() {
    this.tempPoke1 = this.mapPokemonName(this.tempPokeTeam.poke1);
    this.tempPoke2 = this.mapPokemonName(this.tempPokeTeam.poke2);
    this.tempPoke3 = this.mapPokemonName(this.tempPokeTeam.poke3);
    this.tempPoke4 = this.mapPokemonName(this.tempPokeTeam.poke4);
    this.tempPoke5 = this.mapPokemonName(this.tempPokeTeam.poke5);
    this.tempPoke6 = this.mapPokemonName(this.tempPokeTeam.poke6);
    //this.tempPokeTeam.poke1 = this.mapPokemonName(this.tempPokeTeam.poke1);
    // this.tempPokeTeam.poke2 = this.mapPokemonName(this.tempPokeTeam.poke2);
    // this.tempPokeTeam.poke3 = this.mapPokemonName(this.tempPokeTeam.poke3);
    // this.tempPokeTeam.poke4 = this.mapPokemonName(this.tempPokeTeam.poke4);
    // this.tempPokeTeam.poke5 = this.mapPokemonName(this.tempPokeTeam.poke5);
    // this.tempPokeTeam.poke6 = this.mapPokemonName(this.tempPokeTeam.poke6);
  }

  mapPokemonName(pokemonId: number | undefined): string {
    if (pokemonId === undefined) {
      return ''; // or any default value you prefer
    }

    const foundPokemon = this.pokeList.find(pokemon => pokemon.pokeID === pokemonId);
    return foundPokemon ? foundPokemon.pokeName || '' : '';
  }

  initializeTemporaryPokeTeam() {
    console.log("TEAM ID");
    console.log(this.teamID);
    this.tempPokeTeam = {
      teamID: this.teamID !== undefined ? this.teamID : 0,
      teamName: this.teamName || '',
      poke1: this.poke1 !== undefined ? this.poke1 : 0,
      poke2: this.poke2 !== undefined ? this.poke2 : 0,
      poke3: this.poke3 !== undefined ? this.poke3 : 0,
      poke4: this.poke4 !== undefined ? this.poke4 : 0,
      poke5: this.poke5 !== undefined ? this.poke5 : 0,
      poke6: this.poke6 !== undefined ? this.poke6 : 0,
    };
  }

  getPokemonIdByName(pokemonName: string): number {
    console.log("poke in getPokemonIDbyName:");
    console.log(this.tempPokeTeam.poke1);
    const foundPokemon = this.pokeList.find(pokemon => pokemon.pokeName?.toLowerCase() === pokemonName.toLowerCase());

    // Use optional chaining to safely access the property
    return foundPokemon?.pokeID ?? 0;
  }

  saveTeam() {
    // Initialize properties with default values
    this.tempPokeTeam.teamID = this.tempPokeTeam.teamID !== undefined ? this.tempPokeTeam.teamID : 0;

    console.log("poke1 in saveTeam:");
    console.log(this.tempPokeTeam.poke1);

    // const tempId = this.getPokemonIdByName(this.tempTeam.poke1 + "");

    // this.tempTeam.poke1 = this.getPokemonIdByName(this.tempTeam.poke1 + "");
    // this.tempTeam.poke1 = this.tempTeam.poke1 !== undefined ? this.tempTeam.poke1 : 0;
    // this.tempTeam.poke2 = this.tempTeam.poke2 !== undefined ? this.tempTeam.poke2 : 0;
    // this.tempTeam.poke3 = this.tempTeam.poke3 !== undefined ? this.tempTeam.poke3 : 0;
    // this.tempTeam.poke4 = this.tempTeam.poke4 !== undefined ? this.tempTeam.poke4 : 0;
    // this.tempTeam.poke5 = this.tempTeam.poke5 !== undefined ? this.tempTeam.poke5 : 0;
    // this.tempTeam.poke6 = this.tempTeam.poke6 !== undefined ? this.tempTeam.poke6 : 0;
//
// // Convert string values to numbers
    this.tempPokeTeam.poke1 = this.getPokemonIdByName(this.tempPoke1 + "");
    this.tempPokeTeam.poke2 = this.getPokemonIdByName(this.tempPoke2 + "");
    this.tempPokeTeam.poke3 = this.getPokemonIdByName(this.tempPoke3 + "");
    this.tempPokeTeam.poke4 = this.getPokemonIdByName(this.tempPoke4 + "");
    this.tempPokeTeam.poke5 = this.getPokemonIdByName(this.tempPoke5 + "");
    this.tempPokeTeam.poke6 = this.getPokemonIdByName(this.tempPoke6 + "");
//     this.tempPokemon.hp = parseInt(this.tempPokemon.hp as unknown as string, 10);
//     this.tempPokemon.atk = parseInt(this.tempPokemon.atk as unknown as string, 10);
//     this.tempPokemon.def = parseInt(this.tempPokemon.def as unknown as string, 10);
//     this.tempPokemon.spatk = parseInt(this.tempPokemon.spatk as unknown as string, 10);
//     this.tempPokemon.spdef = parseInt(this.tempPokemon.spdef as unknown as string, 10);
//     this.tempPokemon.spd = parseInt(this.tempPokemon.spd as unknown as string, 10);
//
// // Now you can safely use these properties
// // ...
//
// // Ensure other properties are not undefined and assign default values if needed
    this.tempPokeTeam.teamName = this.tempPokeTeam.teamName || '';
//     this.tempPokemon.pokeType1 = this.tempPokemon.pokeType1 || '';
//     this.tempPokemon.pokeType2 = this.tempPokemon.pokeType2 || '';
//     this.tempPokemon.sprite = this.tempPokemon.sprite || '';

    const icon: BIcon = this.$refs.iconSave; // get the icon to animate from the vue refs https://vuejs.org/v2/api/#ref
    this.setBusy(true);// tell parent that this component is waiting for the api to respond
    this.animate(icon, true);// animate the icon in the clicked button to give the user an indication that some thing is happening
    this.violation = {};// empty out violation messages - to hide violation message from user and wait for new violations from the api

    // use the method declared in the pokemon mixin to call the pokemon api
    // if the pokemon is new POST , if the pokemon already exists then PUT
    const url = this.POKETEAM_API + `/${this.tempPokeTeam.teamID}`;
    const method = 'put';

    // console.log(this.tempPokemon);

    this.callAPI(url, method, this.tempPokeTeam, localStorage.token) // returns a promise object
      .then((data) => {
        // determine if the pokemon was added or updated
        this.$emit(this.tempPokeTeam.teamID === data.id ? 'updated' : 'added', data);
      })
      .catch((err) => {
        // get the violation messages from the api - if the web server responded
        //console.log(this.violation);
        //this.violation = err.data || {};
        //console.log(this.violation);
      })
      .finally(() => {
        this.setBusy(false);// tell parent that this component is no longer waiting for the api
        //this.animate(icon, false);// stop the icon animation
        window.location.reload();
      });
  }

  cancel() {
    this.violation = {}; // clear out violation messages and as a result the hasErrs will be null
    this.tempPokeTeam = { ...this.tempPokeTeam };// copy the pokemon values to a new temp pokemon
    this.$emit('cancelled', this.tempPokeTeam); // tell parent that cancel was called
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

  // endregion

  // region WATCHES execute code when a data variable or prop is modified by processes in the application

}
</script>

<template>
  <div class="">
    <div class="">

      <!-- NAME -->
      <b-form-group :invalid-feedback="violation.teamName" :has-err="hasErr.teamName" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded ">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.name" class="d-flex">
              <b-icon-people-fill :title="dt.name"/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.name"
                        :has-err="hasErr.teamName"
                        :disabled="isDisabled"
                        v-model="tempPokeTeam.teamName"
                        trim
                        @keydown="violation.teamName = null"/>
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-between">
        <div class="d-flex flex-wrap col-5">


          <!-- POKE 1 -->
          <b-form-group :invalid-feedback="violation.poke1" :has-err="hasErr.poke1"
                        class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p1" class="d-flex">
                  <b-icon-person-fill :title="dt.p1"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.p1"
                            :has-err="hasErr.poke1"
                            :disabled="isDisabled"
                            v-model="tempPoke1"
                            trim
                            @keydown="violation.poke1 = null"/>
            </b-input-group>
          </b-form-group>

          <!-- POKE 2 -->
          <b-form-group :invalid-feedback="violation.poke2" :has-err="hasErr.poke2"
                        class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p2" class="d-flex">
                  <b-icon-person-fill :title="dt.p2"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.p2"
                            :has-err="hasErr.poke2"
                            :disabled="isDisabled"
                            v-model="tempPoke2"
                            trim
                            @keydown="violation.poke2 = null"/>
            </b-input-group>
          </b-form-group>

          <!-- POKE 3 -->
          <b-form-group :invalid-feedback="violation.poke3" :has-err="hasErr.poke3"
                        class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p3" class="d-flex">
                  <b-icon-person-fill :title="dt.p3"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.p3"
                            :has-err="hasErr.poke3"
                            :disabled="isDisabled"
                            v-model="tempPoke3"
                            trim
                            @keydown="violation.poke3 = null"/>
            </b-input-group>
          </b-form-group>
        </div>
        <div class="d-flex flex-wrap col-5">

          <!-- POKE 4 -->
          <b-form-group :invalid-feedback="violation.poke4" :has-err="hasErr.poke4"
                        class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p4" class="d-flex">
                  <b-icon-person-fill :title="dt.p4"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.p4"
                            :has-err="hasErr.poke4"
                            :disabled="isDisabled"
                            v-model="tempPoke4"
                            trim
                            @keydown="violation.poke4 = null"/>
            </b-input-group>
          </b-form-group>

          <!-- POKE 5 -->
          <b-form-group :invalid-feedback="violation.poke5" :has-err="hasErr.poke5"
                        class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p5" class="d-flex">
                  <b-icon-person-fill :title="dt.p5"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.p5"
                            :has-err="hasErr.poke5"
                            :disabled="isDisabled"
                            v-model="tempPoke5"
                            trim
                            @keydown="violation.poke5 = null"/>
            </b-input-group>
          </b-form-group>

          <!-- POKE 6 -->
          <b-form-group :invalid-feedback="violation.poke6" :has-err="hasErr.poke6"
                        class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.p6" class="d-flex">
                  <b-icon-person-fill :title="dt.p6"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.p6"
                            :has-err="hasErr.poke6"
                            :disabled="isDisabled"
                            v-model="tempPoke6"
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



<style scoped>

</style>
