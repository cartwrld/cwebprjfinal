<script lang="ts">
import {Vue, Component, Prop, Mixins, Watch} from 'vue-property-decorator';
import Pokemon from '@/models/Pokemon';
import {BIcon} from "bootstrap-vue";
import GlobalMixin from "@/mixins/global-mixin"; // Import your Pokemon model

@Component({})
export default class UpdatePokemonForm extends Mixins(GlobalMixin) {
  @Prop() private pokeID!: number;
  @Prop() private pokeName!: string;
  @Prop() private pokeType1!: string;
  @Prop() private pokeType2!: string;
  @Prop() private gen!: number;
  @Prop() private hp!: number;
  @Prop() private atk!: number;
  @Prop() private def!: number;
  @Prop() private spatk!: number;
  @Prop() private spdef!: number;
  @Prop() private spd!: number;
  @Prop() private sprite!: string;

  tempPokemon: Pokemon = {
    pokeID: this.pokeID,
    pokeName: this.pokeName,
    pokeType1: this.pokeType1,
    pokeType2: this.pokeType2,
    gen: this.gen,
    hp: this.hp,
    atk: this.atk,
    def: this.def,
    spatk: this.spatk,
    spdef: this.spdef,
    spd: this.spd,
    sprite: this.sprite,
  };

  violation: any = {}; // will store violation messages that we get from the api

  dt = {
    // Display Text - object that stores text to display to the user instead of the attribute names
    pkid: 'Poke ID',
    name: 'Name',
    t1: 'Type 1',
    t2: 'Type 2',
    gen: 'Generation',
    hp: 'HP',
    atk: 'ATK',
    def: 'DEF',
    spatk: 'SP ATK',
    spdef: 'SP DEF',
    spd: 'SPD',
    sprite: 'Sprite'
  };

  pokeTypes = ['', 'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground',
    'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

  mounted() {
    this.initializeTemporaryPokemon();
  }

  initializeTemporaryPokemon() {
    this.tempPokemon = {
      pokeID: this.pokeID !== undefined ? this.pokeID : 0,
      pokeName: this.pokeName || '',
      pokeType1: this.pokeType1 || '',
      pokeType2: this.pokeType2 || '',
      gen: this.gen !== undefined ? this.gen : 0,
      hp: this.hp !== undefined ? this.hp : 0,
      atk: this.atk !== undefined ? this.atk : 0,
      def: this.def !== undefined ? this.def : 0,
      spatk: this.spatk !== undefined ? this.spatk : 0,
      spdef: this.spdef !== undefined ? this.spdef : 0,
      spd: this.spd !== undefined ? this.spd : 0,
      sprite: this.sprite || '',
    };
  }

  updateTypes() {
    if (this.tempPokemon.pokeType1 === this.tempPokemon.pokeType2) {
      this.tempPokemon.pokeType2 = '';
    }

  }

  // Method to handle updating the Pokemon
  savePokemon() {

    // Initialize properties with default values
    this.tempPokemon.pokeID = this.tempPokemon.pokeID !== undefined ? this.tempPokemon.pokeID : 0;
    this.tempPokemon.hp = this.tempPokemon.hp !== undefined ? this.tempPokemon.hp : 0;
    this.tempPokemon.atk = this.tempPokemon.atk !== undefined ? this.tempPokemon.atk : 0;
    this.tempPokemon.def = this.tempPokemon.def !== undefined ? this.tempPokemon.def : 0;
    this.tempPokemon.spatk = this.tempPokemon.spatk !== undefined ? this.tempPokemon.spatk : 0;
    this.tempPokemon.spdef = this.tempPokemon.spdef !== undefined ? this.tempPokemon.spdef : 0;
    this.tempPokemon.spd = this.tempPokemon.spd !== undefined ? this.tempPokemon.spd : 0;

// Convert string values to numbers
    this.tempPokemon.pokeID = parseInt(this.tempPokemon.pokeID as unknown as string, 10);
    this.tempPokemon.hp = parseInt(this.tempPokemon.hp as unknown as string, 10);
    this.tempPokemon.atk = parseInt(this.tempPokemon.atk as unknown as string, 10);
    this.tempPokemon.def = parseInt(this.tempPokemon.def as unknown as string, 10);
    this.tempPokemon.spatk = parseInt(this.tempPokemon.spatk as unknown as string, 10);
    this.tempPokemon.spdef = parseInt(this.tempPokemon.spdef as unknown as string, 10);
    this.tempPokemon.spd = parseInt(this.tempPokemon.spd as unknown as string, 10);

// Now you can safely use these properties
// ...

// Ensure other properties are not undefined and assign default values if needed
    this.tempPokemon.pokeName = this.tempPokemon.pokeName || '';
    this.tempPokemon.pokeType1 = this.tempPokemon.pokeType1 || '';
    this.tempPokemon.pokeType2 = this.tempPokemon.pokeType2 || '';
    this.tempPokemon.sprite = this.tempPokemon.sprite || '';

    //const icon:BIcon = this.$refs.iconSave; // get the icon to animate from the vue refs https://vuejs.org/v2/api/#ref
    this.setBusy(true);// tell parent that this component is waiting for the api to respond
    //this.animate(icon, true);// animate the icon in the clicked button to give the user an indication that some thing is happening
    //this.violation = {};// empty out violation messages - to hide violation message from user and wait for new violations from the api

    // use the method declared in the pokemon mixin to call the pokemon api
    // if the pokemon is new POST , if the pokemon already exists then PUT
    const url = this.POKEMON_API + `/${this.tempPokemon.pokeID}`;
    const method = 'put';

    // console.log(this.tempPokemon);

    this.callAPI(url, method, this.tempPokemon, localStorage.token) // returns a promise object
      .then((data) => {
        // determine if the pokemon was added or updated
        this.$emit(this.tempPokemon.pokeID === data.id ? 'updated' : 'added', data);
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
    this.tempPokemon = {...this.tempPokemon};// copy the pokemon values to a new temp pokemon
    this.$emit('cancelled', this.tempPokemon); // tell parent that cancel was called
  }

  get hasErr(): any {
    return { // bootstrap hasErrs used to display violation messages
      // true - green border, false - red border, null- regular border
      pokeID: this.violation.pokeID ? false : null,
      pokeName: this.violation.pokeName ? false : null,
      pokeType1: this.violation.pokeType1 ? false : null,
      pokeType2: this.violation.pokeType2 ? false : null,
      gen: this.violation.gen ? false : null,
      hp: this.violation.hp ? false : null,
      atk: this.violation.atk ? false : null,
      def: this.violation.def ? false : null,
      spatk: this.violation.spatk ? false : null,
      spdef: this.violation.spdef ? false : null,
      spd: this.violation.spd ? false : null,
      sprite: this.violation.sprite ? false : null,
    };
  }

}
</script>

<template>
  <div class="">
    <div class="">

      <!-- NAME -->
      <b-form-group
        :invalid-feedback="violation.pokeName"
        :state="hasErr.pokeName"
        class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded ">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.name" class="d-flex">
              <b-icon-person-fill :title="dt.name"/>
            </b-input-group-prepend>
          </div>
          <b-form-input
            class="rounded shadow-sm"
            :placeholder="dt.name"
            v-model="tempPokemon.pokeName"
            :state="hasErr.pokeName"
            :disabled="isDisabled"
            trim
            @keydown="violation.pokeName = null"
          />
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-start">


        <!-- TYPE 1 -->
        <b-form-group
          :invalid-feedback="violation.pokeType1"
          :state="hasErr.pokeType1"
          class="mb-1 col-7">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.t1" class="d-flex">
                <b-icon-textarea-t :title="dt.t1"/>
              </b-input-group-prepend>
            </div>
            <b-form-select
              :state="hasErr.pokeType1"
              :disabled="isDisabled"
              :options="pokeTypes"
              v-model="tempPokemon.pokeType1"
              @change="updateTypes"
              class="rounded border px-4 pe-5 shadow-sm"
            />
          </b-input-group>
        </b-form-group>

        <!-- TYPE 2 -->
        <b-form-group
          :invalid-feedback="violation.pokeType2"
          :state="hasErr.pokeType2"
          class="mb-1 col-7">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.t2" class="d-flex">
                <b-icon-textarea-t :title="dt.t2"/>
              </b-input-group-prepend>
            </div>
            <b-form-select
              :state="hasErr.pokeType2"
              :disabled="isDisabled"
              :options="pokeTypes"
              v-model="tempPokemon.pokeType2"
              @change="updateTypes"
              class="rounded border px-4 pe-5 shadow-sm"
            />
          </b-input-group>

        </b-form-group>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-between">
        <div class="d-flex flex-wrap col-5">
          <!-- HP -->
          <b-form-group
            :invalid-feedback="violation.hp"
            :state="hasErr.hp"
            class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.hp" class="d-flex">
                  <b-icon-heart-fill :title="dt.hp"/>
                </b-input-group-prepend>
              </div>
              <b-form-input
                class="rounded shadow-sm"
                :placeholder="dt.hp"
                :state="hasErr.hp"
                :disabled="isDisabled"
                v-model="tempPokemon.hp"
                trim
                @keydown="violation.hp = null"/>
            </b-input-group>
          </b-form-group>

          <!-- ATK -->
          <b-form-group
            :invalid-feedback="violation.atk"
            :state="hasErr.atk"
            class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.atk" class="d-flex">
                  <b-icon-star-fill :title="dt.atk"/>
                </b-input-group-prepend>
              </div>
              <b-form-input
                class="rounded shadow-sm"
                :placeholder="dt.atk"
                :state="hasErr.atk"
                :disabled="isDisabled"
                v-model="tempPokemon.atk"
                trim
                @keydown="violation.atk = null"/>
            </b-input-group>
          </b-form-group>

          <!-- DEF -->
          <b-form-group
            :invalid-feedback="violation.def"
            :state="hasErr.def"
            class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.def" class="d-flex">
                  <b-icon-shield-fill :title="dt.def"/>
                </b-input-group-prepend>
              </div>
              <b-form-input
                class="rounded shadow-sm"
                :placeholder="dt.def"
                :state="hasErr.def"
                :disabled="isDisabled"
                v-model="tempPokemon.def"
                trim
                @keydown="violation.def = null"/>
            </b-input-group>
          </b-form-group>

        </div>
        <div class="d-flex flex-wrap col-5">
          <!-- SPATK -->
          <b-form-group
            :invalid-feedback="violation.spatk"
            :state="hasErr.spatk"
            class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spatk" class="d-flex">
                  <b-icon-star-half :title="dt.spatk"/>
                </b-input-group-prepend>
              </div>
              <b-form-input
                class="rounded shadow-sm"
                :placeholder="dt.spatk"
                :state="hasErr.spatk"
                :disabled="isDisabled"
                v-model="tempPokemon.spatk"
                trim
                @keydown="violation.spatk = null"/>
            </b-input-group>
          </b-form-group>

          <!-- SPDEF -->
          <b-form-group
            :invalid-feedback="violation.spdef"
            :state="hasErr.spdef"
            class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spdef" class="d-flex">
                  <b-icon-shield-shaded :title="dt.spdef"/>
                </b-input-group-prepend>
              </div>
              <b-form-input
                class="rounded shadow-sm"
                :placeholder="dt.spdef"
                :state="hasErr.spdef"
                :disabled="isDisabled"
                v-model="tempPokemon.spdef"
                trim
                @keydown="violation.spdef = null"/>
            </b-input-group>
          </b-form-group>

          <!-- SPD -->
          <b-form-group
            :invalid-feedback="violation.spd"
            :state="hasErr.spd"
            class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spd" class="d-flex">
                  <b-icon-lightning-charge-fill :title="dt.spd"/>
                </b-input-group-prepend>
              </div>
              <b-form-input
                class="rounded shadow-sm"
                :placeholder="dt.spd"
                :state="hasErr.spd"
                :disabled="isDisabled"
                v-model="tempPokemon.spd"
                trim
                @keydown="violation.spd = null"/>
            </b-input-group>
          </b-form-group>
        </div>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <!-- BUTTONS -->
      <b-button-group class="w-100 mb-3">
        <b-button variant="primary" :disabled="isDisabled" @click="savePokemon">
          <b-icon-cloud-arrow-up-fill ref="iconSave"/>
          Save Poke
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
/* Add your custom styles if needed */
</style>
