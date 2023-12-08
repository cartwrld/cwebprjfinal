<template>
  <div class="shadow-sm">
    <b-input-group>

      <b-input type="search" debounce="500" placeholder="Search" class="text-info "
               v-model="query" @focus="hasFocus=true;" @blur="hasFocus=false"/>
      <b-input-group-append v-b-tooltip.hover.right="'Search'" is-text class="rounded">
        <b-icon-search variant="info" @click="filterPokeTeams" scale="1.1" class="my-1"/>
      </b-input-group-append>
    </b-input-group>

    <b-list-group class="shadow autocomplete-list" v-show="showList" @mousedown.prevent>
      <b-list-group-item v-if="isBusy" variant="info">
        <b-spinner small/>
      </b-list-group-item>
      <b-list-group-item v-else-if="results.length == 0" variant="warning" class="w-25">
        No PokeTeam Found matching the criteria
      </b-list-group-item>
      <b-list-group-item v-for="team in results" :key="team.teamID"
                         @click="handlePokeTeamSelected(team)" button>
        <div class="">
          <div class="col-4 col-lg-6">{{ team.teamName }}</div>
          <!--          <div class="col-4 col-lg-6">{{pokeTeam.address}}</div>-->
          <!--          <div class="col-4 col-lg-12">{{pokeTeam.phone}}</div>-->
        </div>
      </b-list-group-item>
    </b-list-group>

    <!--    ONLY SHOW debug info (very ugly) if the debug prop is set to true-->
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
  Component, Prop, Mixins, Emit, Watch,
} from 'vue-property-decorator';
import GlobalMixin from '@/mixins/global-mixin';
import Pokemon from "@/models/Pokemon";
import PokeTeam from "@/models/PokeTeam";

@Component
export default class PokeTeamSearch extends Mixins(GlobalMixin) {
  /** PROPS are a one-way communication from the parent to this child component ( parent -> child )
   * NEVER mutate a prop within this child component - use emits instead
   * https://vuejs.org/v2/guide/components.html#Passing-Data-to-Child-Components-with-Props
   * Decorator: https://github.com/kaorun343/vue-property-decorator#Prop
   */
  @Prop({default: 2}) readonly minSearchLength!: number
  @Prop(Array) readonly pokeTeams!: PokeTeam[]; // New prop for the array to be searched
  // data variables are constantly monitored for changes and when their values change Vue 'refreshes' the display
  query = '' // search string to send to api

  selectedPokeTeam = new PokeTeam();

  results: PokeTeam[] = []  // array of student object returned by the api

  hasFocus = false // used to determine whether to show list of students or hide them

  /** EMITS are one-way communication from this child component to the parent ( child -> parent )
   * https://vuejs.org/v2/guide/components.html#Emitting-a-Value-With-an-Event
   * Trigger an event on the current instance. Any additional arguments will be passed into the listener's callback function.
   * Decorator: https://github.com/kaorun343/vue-property-decorator#Emit
   */
  filterPokeTeams() {
    // Filter the array passed as a prop based on the search query
    this.results = this.pokeTeams.filter(item =>
      (item.teamName ?? '').toLowerCase().includes(this.query.toLowerCase())
    );

    console.log(this.results);
    // Emit an event to notify the parent component about the search query change
    this.$emit('search-query-changed', this.query);
  }


  handlePokeTeamSelected(poketeam: PokeTeam): PokeTeam {
    this.hasFocus = false;
    this.selectedPokeTeam = poketeam;
    this.query = poketeam.teamName!;
    return poketeam;
  }


  // ================== UI FUNCTIONS ====================

  /** COMPUTED PROPERTIES are javascript functions that Vuejs uses as variables
   * https://vuejs.org/v2/guide/computed.html#Computed-Properties
   *  Computed properties MUST "RETURN" something
   *  and should NEVER MODIFY an existing data variable or prop
   *  NEVER use the brackets '()' when using the computed property
   *      correct example:   this.isNew
   *      wrong example:  this.isNew()
   */
  get showList(): boolean { // computed property to determine when to show or hide the list group
    return this.query.length >= this.minSearchLength && this.hasFocus;
  }

  /** WATCHES execute code when a data variable or prop is modified by processes in the application
   * https://vuejs.org/v2/guide/computed.html#Watchers
   * Watches MUST correspond to a data variable or prop we are watching - in this example below, the 'query' data variable
   * Watches are mostly used for simple data variables, rarely for objects
   *      if used on objects then you need to specify 'deep:true'
   *      otherwise the handler will only execute when the entire object is replaced
   * Decorator: https://github.com/kaorun343/vue-property-decorator#Watch
   */
  @Watch('query')
  onQueryChanged(newVal: string, oldVal: string) {
    if (!this.showList || newVal.length < oldVal.length) {
      if (newVal === '') {
        // Reset selectedPokemon when the query becomes empty
        this.selectedPokeTeam = new PokeTeam();
      }
      return false;
    }

    // Filter the array passed as a prop based on the search query
    this.results = this.pokeTeams.filter(item =>
      (item.teamName ?? '').toLowerCase().includes(this.query.toLowerCase())
    );
  }
}
</script>

<style scoped>
/* declare a new style class because bootstrap does not have a style that meets our needs */
.autocomplete-list {
  position: absolute;
  max-height: 22em;
  overflow-y: auto;
  z-index: 999;
  width: 90%
}
</style>

