<template>
  <div>
    <div>

      <!-- PokeID -->
      <b-form-group :invalid-feedback="violation.pokeID" :state="hasErr.pokeID" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded ">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.pkid" class="d-flex">
              <b-icon-hash :title="dt.pkid"/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.pkid"
                        :state="hasErr.pokeID"
                        v-model="tempPokemon.pokeID"
                        trim
                        @keydown="violation.pokeID = null"/>
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>


      <!-- NAME -->
      <b-form-group :invalid-feedback="violation.pokeName" :state="hasErr.pokeName" class="mb-1">
        <b-input-group>
          <div class="d-flex shadow-sm rounded ">
            <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.name" class="d-flex">
              <b-icon-person-fill :title="dt.name"/>
            </b-input-group-prepend>
          </div>
          <b-form-input class="rounded shadow-sm"
                        :placeholder="dt.name"
                        :state="hasErr.pokeName"
                        v-model="tempPokemon.pokeName"
                        trim
                        @keydown="violation.pokeName = null"/>
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>

      <!-- TYPE CONTAINER -->
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
            <b-form-select class="rounded border px-4 pe-5 shadow-sm"
                           :options="pokeTypes"
                           v-model="tempPokemon.pokeType1"
                           :state="hasErr.t1"

                           @change="updateTypes"
            />
          </b-input-group>
        </b-form-group>

        <!-- TYPE 2 -->
        <b-form-group :invalid-feedback="violation.pokeType2" :state="hasErr.pokeType2"
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
                           :state="hasErr.t2"

                           @change="updateTypes"
            />
          </b-input-group>
        </b-form-group>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <!-- STATS CONTAINER -->
      <div class="d-flex justify-content-between">

        <!-- HP / ATK / DEF -->
        <div class="d-flex flex-wrap col-5">
          <!-- HP -->
          <b-form-group :invalid-feedback="violation.hp" :state="hasErr.hp" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.hp" class="d-flex">
                  <b-icon-heart-fill :title="dt.hp"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.hp"
                            :state="hasErr.hp"
                            v-model="tempPokemon.hp"
                            trim
                            @keydown="violation.hp = null"/>
            </b-input-group>
          </b-form-group>

          <!-- ATK -->
          <b-form-group :invalid-feedback="violation.atk" :state="hasErr.atk" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.atk" class="d-flex">
                  <b-icon-star-fill :title="dt.atk"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.atk"
                            :state="hasErr.atk"
                            v-model="tempPokemon.atk"
                            trim
                            @keydown="violation.atk = null"/>
              <div v-if="hasErr.atk" class="text-danger">you have an error</div>
            </b-input-group>
          </b-form-group>

          <!-- DEF -->
          <b-form-group :invalid-feedback="violation.def" :state="hasErr.def" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.def" class="d-flex">
                  <b-icon-shield-fill :title="dt.def"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.def"
                            :state="hasErr.def"
                            v-model="tempPokemon.def"
                            trim
                            @keydown="violation.def = null"/>
            </b-input-group>
          </b-form-group>
        </div>

        <!-- SPATK / SPDEF / SPD -->
        <div class="d-flex flex-wrap col-5">

          <!-- SPD -->
          <b-form-group :invalid-feedback="violation.spd" :state="hasErr.spd" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spd" class="d-flex">
                  <b-icon-lightning-charge-fill :title="dt.spd"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.spd"
                            :state="hasErr.spd"
                            v-model="tempPokemon.spd"
                            trim
                            @keydown="violation.spd = null"/>
            </b-input-group>
          </b-form-group>

          <!-- SPATK -->
          <b-form-group :invalid-feedback="violation.spatk" :state="hasErr.spatk" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spatk" class="d-flex">
                  <b-icon-star-half :title="dt.spatk"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.spatk"
                            :state="hasErr.spatk"
                            v-model="tempPokemon.spatk"
                            trim
                            @keydown="violation.spatk = null"/>
            </b-input-group>
          </b-form-group>

          <!-- SPDEF -->
          <b-form-group :invalid-feedback="violation.spdef" :state="hasErr.spdef" class="mb-1">
            <b-input-group>
              <div class="d-flex shadow-sm rounded">
                <b-input-group-prepend is-text v-b-tooltip.hover.right="dt.spdef" class="d-flex">
                  <b-icon-shield-shaded :title="dt.spdef"/>
                </b-input-group-prepend>
              </div>
              <b-form-input class="rounded shadow-sm"
                            :placeholder="dt.spdef"
                            :state="hasErr.spdef"
                            v-model="tempPokemon.spdef"
                            trim
                            @keydown="violation.spdef = null"/>
            </b-input-group>
          </b-form-group>
        </div>
      </div>

      <div class="border border-1 my-3 w-100"></div>

      <!-- SPRITE should be a select box and you pick from a picture for your pokemon -->
      <b-form-group :invalid-feedback="violation.sprite" :state="hasErr.sprite"
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
                         :state="hasErr.sprite"
                         @change="updateTypes"
          />
        </b-input-group>
      </b-form-group>

      <div class="border border-1 my-3 w-100"></div>

      <!-- BUTTONS -->
      <b-button-group class="w-100 mb-3">
        <b-button variant="primary" @click="savePokemon">
          <b-icon-cloud-arrow-up-fill ref="iconSave"/>
          Save Poke
        </b-button>
        <b-button variant="danger" @click="cancel">
          <b-icon-x-square-fill/>
          Cancel
        </b-button>
      </b-button-group>
    </div>

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
</template>

<script lang="ts">

/* eslint-disable max-len */
import {
  Component, Mixins, Prop, Watch,
} from 'vue-property-decorator';
import {BIcon} from 'bootstrap-vue';
import Pokemon from '@/models/Pokemon';
import GlobalMixin from '@/mixins/global-mixin';
import {validate, ValidationError} from "class-validator";
import PokemonViolation from "@/models/PokemonViolation";

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

  lst = localStorage.getItem('authToken');

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

  async savePokemon() {
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

    // Ensure other properties are not undefined and assign default values if needed
      this.tempPokemon.pokeName = this.tempPokemon.pokeName || '';
      this.tempPokemon.pokeType1 = this.tempPokemon.pokeType1 || '';
      this.tempPokemon.pokeType2 = this.tempPokemon.pokeType2 || '';
      this.tempPokemon.sprite = this.tempPokemon.sprite || '';

    // DONE! disable all of the form inputs
    this.setBusy(true);

    // TODO validate tempPokemon data before sending fetch request
    const errors = await validate(this.tempPokemon);

    console.log(errors);

    if (errors.length > 0) {
      const temp = new PokemonViolation();
      errors.forEach((vio: ValidationError) => {
        Object.assign(temp, {
          [vio.property]: vio.constraints![Object.keys(vio.constraints!)[0]],
        });
      });
      console.log(temp);
      this.violation = temp;
    } else {

      // use the method declared in the pokemon mixin to call the pokemon api
      // if the pokemon is new POST , if the pokemon already exists then PUT
      const url = this.POKEMON_API + `/`;
      const method = 'post';

      this.callAPI(url, method, this.tempPokemon, this.lst) // returns a promise object
        .then((data) => {
          const savedPokemon = Object.assign(new Pokemon(), data);
          console.log(savedPokemon)
          this.$emit( "added", savedPokemon);
        })
        .catch((err) => {
          this.violation = err.data || {};

        })
        .finally(() => {
          this.setBusy(false);
          console.log(this.violation)
          if (this.violation.atk === null) {
            window.location.reload();
          }
        })

    }

  }

  cancel() {
    this.violation = {}; // clear out violation messages and as a result the hasErrs will be null
    this.tempPokemon = {...this.tempPokemon};// copy the pokemon values to a new temp pokemon
    this.$emit('cancelled', this.tempPokemon); // tell parent that cancel was called
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

  // endregion

  // region WATCHES execute code when a data variable or prop is modified by processes in the application
  @Watch('pokemon', {deep: true})// watch all attributes of the pokemon object - if any attribute changes then execute the handler
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
