<template>
  <div class="">

    <h1 class="pb-5">PokeTeams</h1>
    <div class="d-flex justify-content-center align-items-center p-5 mb-4 rounded-4 bg-dark-subtle shadow-sm">
      <div class="d-flex justify-content-between align-items-center w-100">
        <div class="d-flex justify-content-center align-items-center">
          <h4 class="">Search for a Pokemon:</h4>
        </div>
        <div class="d-flex justify-content-center align-items-center rounded w-50 shadow">

          <PokeTeamSearch
            class="col-12"
            min-search-length="3"
            @busy="setBusy"
            :pokeTeams="fetchedTeams"
            @pokemonSelected="handleTeamCardSelected"
            @search-query-changed="handleSearchQueryChange"
          />
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <b-button variant="success" class="fw-semibold shadow" @click="showAddTeamModal">
            <b-icon-cloud-arrow-up-fill class="me-2"/>
            <span class="ms-1">Add PokeTeam</span>
          </b-button>
        </div>
      </div>
    </div>

    <!-- Iterate over each pokemon and create a PokeCard for each one -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-wrap col-12 justify-content-center">
        <div
          v-for="team in this.fetchedTeams"
          :key="team.teamID"
          class="p-2 d-flex col-12
        justify-content-center">
          <TeamCard
            :team-i-d="team.teamID"
            :team-name="team.teamName"
            :poke1="team.poke1"
            :poke2="team.poke2"
            :poke3="team.poke3"
            :poke4="team.poke4"
            :poke5="team.poke5"
            :poke6="team.poke6"
            :sprite1="pokeballPath"
            :sprite2="pokeballPath"
            :sprite3="pokeballPath"
            :sprite4="pokeballPath"
            :sprite5="pokeballPath"
            :sprite6="pokeballPath"


            variant="light"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import { BTable, BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import TeamCard from '@/components/TeamCard.vue';
import fetchData from '../services/apiService';
import fetchSpriteData from '../services/apiService_v2';
import PokemonSearch from '@/components/PokemonSearch.vue';
import Pokemon from '@/models/Pokemon';
import PokeTeam from '@/models/PokeTeam';
import GlobalMixin from '@/mixins/global-mixin';
import PokeTeamSearch from '@/components/PokeTeamSearch.vue';
// v-if="team.sprite1&&team.sprite2&&team.sprite3&&team.sprite4&&team.sprite5&&team.sprite6"
interface Team {
  teamID: number;
  teamName: string;
  poke1: number;
  poke2: number;
  poke3: number;
  poke4: number;
  poke5: number;
  poke6: number;
  sprite1: string;
  sprite2: string;
  sprite3: string;
  sprite4: string;
  sprite5: string;
  sprite6: string;
}

@Component({
  components: {
    PokeTeamSearch,
    PokemonSearch,
    TeamCard},
})
export default class PokemonTeamView extends GlobalMixin {
  fetchedTeams: Team[] = [] || null;
  fetchedPokemon: any = [];

  filteredPokeTeamList: Team[] = [] ;

  // data variable
  selectedPokeTeam: PokeTeam = new PokeTeam();

  pokeballPath = 'https://imgur.com/CtkIAQO.png';
  spr1 = '';
  spr2 = '';
  spr3 = '';
  spr4 = '';
  spr5 = '';
  spr6 = '';



  RookieToken = 'iHaveReadAccess'
  TrainerToken = 'iHaveWriteAccess'
  GymLeaderToken = 'iHaveAdminAccess'

  viewPokeTeam = false;
  addPokeTeam = false;


  // async provider(ctx: BvTableCtxObject): Promise<Team[]> {
  //   if (!this.fetchedTeams) {
  //     try {
  //       await this.fetchData();
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }
  //
  //   return this.fetchedTeams;
  //
  // }

  // Method to fetch data
  async fetchData() {

    this.setBusy(true);

    try {
      let endpoint = 'poketeam';
      this.fetchedTeams = await fetchData(endpoint, this.GymLeaderToken);
      // console.log(this.fetchedTeams)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      let endpoint = 'pokemon';
      this.fetchedPokemon = await fetchData(endpoint, this.GymLeaderToken);
      // console.log(this.fetchedPokemon)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      await this.setTeamSprites()
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // console.log('==============')
    // console.log(this.fetchedTeams)
    await this.setBusy(false)
  }

  async setTeamSprites() {

    const ft = Array.from(this.fetchedTeams);

    for (let i = 0; i < ft.length; i++) {
      const team = ft[i]
      try {
        const sprites = this.getTeamSprites(team.poke1, team.poke2, team.poke3, team.poke4, team.poke5, team.poke6);
        team.sprite1 = sprites[0]
        team.sprite2 = sprites[1]
        team.sprite3 = sprites[2]
        team.sprite4 = sprites[3]
        team.sprite5 = sprites[4]
        team.sprite6 = sprites[5]

        this.spr1 = sprites[0]
        this.spr2 = sprites[1]
        this.spr3 = sprites[2]
        this.spr4 = sprites[3]
        this.spr5 = sprites[4]
        this.spr6 = sprites[5]

        // console.log(sprites[0])
        // console.log(`teamSprite set ${i + 1} complete`)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }

  getTeamSprites(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number) {
    const ids = [p1, p2, p3, p4, p5, p6]
    const sprites = [];
    // console.log('get team')
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const pokemon = this.fetchedPokemon.find((poke: any) => poke.pokeID === id);
      pokemon ? sprites.push(pokemon.sprite) : sprites.push('https://imgur.com/CtkIAQO');
    }
    return sprites;
  }


  // Fetch data when component is mounted
  async mounted() {
    await this.fetchData();
  }

  showViewTeamModal(): void {
    this.viewPokeTeam = true;
  }

  showAddTeamModal(): void {
    this.addPokeTeam = true;
  }

  $refs!: {
    pokeTeamTable: BTable
  };



  // computed from b-table localItems
  get pokeTeamList() {
    return this.$refs.pokeTeamTable.localItems;
  }

  // region METHODS

  handleSearchQueryChange(query: string) {
    // Filter the local Pokemon list based on the search query
    if (query === '') {
      // If the search query is empty, reset the filtered list
      this.filteredPokeTeamList = this.fetchedTeams;
    } else {
      this.filteredPokeTeamList = this.fetchedTeams.filter((poketeam: { teamName: string; }) =>
        (poketeam.teamName ?? '').toLowerCase()
          .includes(query.toLowerCase())
      );
    }
  }

  selectRow(item: any) {
    if (!item.id) return;
    this.$refs.pokeTeamTable.selectRow(this.pokeTeamList.findIndex((i: any) => i.id === item.id));
  }

  refreshTable() {
    this.$refs.pokeTeamTable.refresh();
  }

  handleSelect(poketeam: PokeTeam) {
    this.selectRow(poketeam);
    this.selectedPokeTeam = poketeam;
  }

  handleTeamCardSelected(poketeam: PokeTeam): void {
    // Set the selected Pokemon and show the modal
    this.selectedPokeTeam = poketeam;
    this.showViewTeamModal();
  }

  handleAdd(poketeam: PokeTeam) {
    // PokemonForm emits a pokemon when a new pokemon returns from the api
    this.pokeTeamList.unshift(poketeam);
    this.handleSelect(poketeam);
  }

  handleUpdate(poketeam: PokeTeam) {
    // PokemonForm emits a pokemon when an existing pokemon is updated in the api

    // update the values in the selectedPokemon to the updated values
    Object.assign(this.selectedPokeTeam, poketeam);
  }

  handleDelete(poketeam: PokeTeam) { // PokemonForm emits a pokemon when an existing pokemon is deleted in the api
    this.selectedPokeTeam = new PokeTeam();
    // find the pokemon in the pokemon array
    const index = this.pokeTeamList.findIndex((s: any) => s.id === poketeam.teamID);
    if (index >= 0) this.pokeTeamList.splice(index, 1);

    // this.refreshTable()
  }

  handleReset(poketeam: PokeTeam) { // PokemonForm emits a pokemon when an existing pokemon fails to delete in the api
    // issue happened with delete - so reload pokeList
    this.refreshTable();
  }

  handleCancel() { // PokemonForm emits that the cancel button was clicked
    // do nothing at this point
  }
}
</script>



<style scoped>

</style>
<!--            :sprite1="team.spriteURLs ? team.spriteURLs[0] : pokeballPath"-->
<!--            :sprite2="team.spriteURLs ? team.spriteURLs[1] : pokeballPath"-->
<!--            :sprite3="team.spriteURLs ? team.spriteURLs[2] : pokeballPath"-->
<!--            :sprite4="team.spriteURLs ? team.spriteURLs[3] : pokeballPath"-->
<!--            :sprite5="team.spriteURLs ? team.spriteURLs[4] : pokeballPath"-->
<!--            :sprite6="team.spriteURLs ? team.spriteURLs[5] : pokeballPath"-->
