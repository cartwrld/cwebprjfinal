<template>
  <div class="">
    <div class="">
      <!-- POKE ID -->
      <b-form-group :invalid-feedback="violation.pokeID" :has-err="hasErr.pokeID" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded">

            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.pkid" class="d-flex">
              <b-icon-hash :title="dt.pkid" class=""/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.pkid"
                        v-model="tempPokemon.pokeID"
                        :has-err="hasErr.pokeID"
                        :disabled="isDisabled"
                        trim
                        @keydown="violation.pokeID = null"
          />
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>


      <!-- NAME -->
      <b-form-group :invalid-feedback="violation.pokeName" :has-err="hasErr.pokeName" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded ">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.name" class="d-flex">
              <b-icon-person-fill :title="dt.name"/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.name"
                        :has-err="hasErr.pokeName"
                        :disabled="isDisabled"
                        v-model="tempPokemon.pokeName"
                        trim
                        @keydown="violation.pokeName = null"/>
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-start">


        <!-- TYPE 1 -->
        <b-form-group :invalid-feedback="violation.pokeType1" :has-err="hasErr.pokeType1"
                      class="mb-1 col-7">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.t1" class="d-flex">
                <b-icon-textarea-t :title="dt.t1"/>
              </b-input-group-prepend>
            </div>
            <b-form-select class="rounded border px-4 pe-5 shadow-sm"
                           :options="pokeTypes"
                           v-model="tempPokemon.pokeType1"
                           :has-err="hasErr.t1"
                           :disabled="isDisabled"
                           @change="updateTypes"
            />
          </b-input-group>
        </b-form-group>

        <!-- TYPE 2 -->
        <b-form-group :invalid-feedback="violation.pokeType2" :has-err="hasErr.pokeType2"
                      class="mb-1 col-6">
          <b-input-group>
            <div class="d-flex shadow-sm rounded">
              <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.t2" class="d-flex">
                <b-icon-textarea-t :title="dt.t2"/>
              </b-input-group-prepend>
            </div>
            <b-form-select class="rounded border px-4 pe-5 shadow-sm"
                           :options="pokeTypes"
                           v-model="tempPokemon.pokeType2"
                           :has-err="hasErr.t2"
                           :disabled="isDisabled"
                           @change="updateTypes"
            />
          </b-input-group>
        </b-form-group>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <div class="d-flex justify-content-between">
        <div class="d-flex flex-wrap col-5">

          <!-- HP -->
          <b-form-group :invalid-feedback="violation.hp" :has-err="hasErr.hp" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.hp" class="d-flex">
                  <b-icon-heart-fill :title="dt.hp"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.hp"
                            :has-err="hasErr.hp"
                            :disabled="isDisabled"
                            v-model="tempPokemon.hp"
                            trim
                            @keydown="violation.hp = null"/>
            </b-input-group>
          </b-form-group>

          <!-- ATK -->
          <b-form-group :invalid-feedback="violation.atk" :has-err="hasErr.atk" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.atk" class="d-flex">
                  <b-icon-heart-fill :title="dt.atk"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.atk"
                            :has-err="hasErr.atk"
                            :disabled="isDisabled"
                            v-model="tempPokemon.atk"
                            trim
                            @keydown="violation.atk = null"/>
              <div v-if="hasErr.atk" class="text-danger">you have an error</div>
            </b-input-group>
          </b-form-group>

          <!-- DEF -->
          <b-form-group :invalid-feedback="violation.def" :has-err="hasErr.def" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.def" class="d-flex">
                  <b-icon-heart-fill :title="dt.def"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.def"
                            :has-err="hasErr.def"
                            :disabled="isDisabled"
                            v-model="tempPokemon.def"
                            trim
                            @keydown="violation.def = null"/>
            </b-input-group>
          </b-form-group>
        </div>
        <div class="d-flex flex-wrap col-5">
          <!-- SPATK -->
          <b-form-group :invalid-feedback="violation.spatk" :has-err="hasErr.spatk" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spatk" class="d-flex">
                  <b-icon-heart-fill :title="dt.spatk"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.spatk"
                            :has-err="hasErr.spatk"
                            :disabled="isDisabled"
                            v-model="tempPokemon.spatk"
                            trim
                            @keydown="violation.spatk = null"/>
            </b-input-group>
          </b-form-group>

          <!-- SPDEF -->
          <b-form-group :invalid-feedback="violation.spdef" :has-err="hasErr.spdef" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spdef" class="d-flex">
                  <b-icon-heart-fill :title="dt.spdef"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.spdef"
                            :has-err="hasErr.spdef"
                            :disabled="isDisabled"
                            v-model="tempPokemon.spdef"
                            trim
                            @keydown="violation.spdef = null"/>
            </b-input-group>
          </b-form-group>

          <!-- SPD -->
          <b-form-group :invalid-feedback="violation.spd" :has-err="hasErr.spd" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spd" class="d-flex">
                  <b-icon-heart-fill :title="dt.spd"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.spd"
                            :has-err="hasErr.spd"
                            :disabled="isDisabled"
                            v-model="tempPokemon.spd"
                            trim
                            @keydown="violation.spd = null"/>
            </b-input-group>
          </b-form-group>
        </div>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <!-- SPRITE should be a select box and you pick from a picture for your pokemon -->
      <b-form-group :invalid-feedback="violation.sprite" :has-err="hasErr.sprite"
                    class="mb-1 col-12">
        <b-input-group class="col-12 d-flex justify-content-start">
          <div class="d-flex shadow-sm rounded">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.sprite" class="d-flex  ">
              <b-icon-image-fill :title="dt.sprite"/>
            </b-input-group-prepend>
          </div>
          <b-form-select class="rounded border px-4 pe-5 col shadow-sm"
                         :options="sprites"
                         v-model="tempPokemon.sprite"
                         :has-err="hasErr.sprite"
                         :disabled="isDisabled"
                         @change="updateTypes"
          />
        </b-input-group>
      </b-form-group>

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

<script lang="ts">
/* eslint-disable max-len */
import {
  Component, Mixins, Prop, Watch,
} from 'vue-property-decorator';
import { BIcon } from 'bootstrap-vue';
import Pokemon from '@/models/Pokemon';
import GlobalMixin from '@/mixins/global-mixin';

@Component
export default class PokemonForm extends Mixins(GlobalMixin) {
  @Prop({
    type: Object,
    validator: (s) => s instanceof Object
  }) readonly pokemon: any;

  $refs!: {
    iconDelete: BIcon
    iconSave: BIcon
  };

  token = 'iHaveWriteAccess';
  // region DATA VARIABLES
  // will store a copy of the values from the pokemon declared in the props section
  tempPokemon: Pokemon = new Pokemon();

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

  // Pokemon types for combo boxes
  pokeTypes = ['', 'normal', 'fire', 'water', 'grass', 'electric', 'ice', 'fighting', 'poison', 'ground',
    'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'];

  sprites = [
    {
      text: 'Ditto',
      value: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    },
    // Add other sprite options as needed
  ];

  showConfirmDelete = false;
  // endregion

  // region METHODS

  // Method to update types and ensure they are different
  updateTypes() {
    if (this.tempPokemon.pokeType1 === this.tempPokemon.pokeType2) {
      this.tempPokemon.pokeType2 = '';
    }

    const selectedSprite = this.sprites.find(sprite => sprite.value === this.tempPokemon.sprite);
    if (selectedSprite) {
      this.tempPokemon.sprite = selectedSprite.value; // Set the selected sprite URL
    }
  }

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

    const icon: BIcon = this.$refs.iconSave; // get the icon to animate from the vue refs https://vuejs.org/v2/api/#ref
    this.setBusy(true);// tell parent that this component is waiting for the api to respond
    this.animate(icon, true);// animate the icon in the clicked button to give the user an indication that some thing is happening
    this.violation = {};// empty out violation messages - to hide violation message from user and wait for new violations from the api

    // use the method declared in the pokemon mixin to call the pokemon api
    // if the pokemon is new POST , if the pokemon already exists then PUT
    const url = this.POKEMON_API + (this.isNew ? '' : `/${this.tempPokemon.pokeID}`);
    const method = this.isNew ? 'post' : 'put';

    // console.log(this.tempPokemon);

    this.callAPI(url, method, this.tempPokemon) // returns a promise object
      .then((data) => {
        // determine if the pokemon was added or updated
        this.$emit(this.tempPokemon.pokeID === data.id ? 'updated' : 'added', data);
      })
      .catch((err) => {
        // get the violation messages from the api - if the web server responded
        //console.log(this.violation);
        this.violation = err.data || {};
        //console.log(this.violation);
      })
      .finally(() => {
        this.setBusy(false);// tell parent that this component is no longer waiting for the api
        this.animate(icon, false);// stop the icon animation
      });

    //window.location.reload();
  }

  cancel() {
    this.violation = {}; // clear out violation messages and as a result the hasErrs will be null
    this.tempPokemon = { ...this.pokemon };// copy the pokemon values to a new temp pokemon
    this.$emit('cancelled', this.pokemon); // tell parent that cancel was called
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

  get isNew(): boolean {
    // if pokemonID is null, 0 , '' then it's a new pokemon not an existing pokemon
    return !this.pokemon || !this.pokemon.pokeID;
  }

  // endregion

  // region WATCHES execute code when a data variable or prop is modified by processes in the application
  @Watch('pokemon', { deep: true })// watch all attributes of the pokemon object - if any attribute changes then execute the handler
  onPokemonChanged(newPoke: Pokemon, oldPoke: Pokemon) { // execute this function when the pokemon object in the props section changes
    if (!newPoke || !newPoke.pokeID) {
      // if new pokemon is null or doesn't have an id
      this.tempPokemon = new Pokemon();// clear out temporary pokemon
    } else if (!oldPoke || newPoke.pokeID !== oldPoke.pokeID) {
      // if old pokemon is null or new pokemon is not the same as old pokemon
      // COPY VALUES from the pokemon prop into new a temp pokemon object
      this.tempPokemon = Object.assign(new Pokemon(), this.pokemon);
    }
    this.violation = {};// empty out violation messages - to hide them from the user
  }
}
</script>

<style scoped>

</style>
