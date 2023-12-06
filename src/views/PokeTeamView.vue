<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {BvTableCtxObject} from 'bootstrap-vue/src/components/table';
import TeamCard from '@/components/TeamCard.vue';
import fetchData from '../services/apiService';
import fetchSpriteData from '../services/apiService_v2';

interface Team {
  teamID: number;
  teamName: string;
  poke1: number;
  poke2: number;
  poke3: number;
  poke4: number;
  poke5: number;
  poke6: number;
  spriteURLs?: string[]; // Optional, if you're adding this property later
}

@Component({
  components: {TeamCard},
})
export default class PokemonTeamView extends Vue {
  fetchedTeams: Team[]  = [] || null;
  fetchedPokemon: any = [];
  spriteURLs: any = [];

  // pokeballPath = '../assets/pokeball.png';
  pokeballPath = 'https://imgur.com/CtkIAQO';

  RookieToken = 'iHaveReadAccess'
  TrainerToken = 'iHaveWriteAccess'
  GymLeaderToken = 'iHaveAdminAccess'

  viewPokemon = false;

  // fields = [
  //   { key: 'Team ID', sortable: true },
  //   { key: 'Team Name', sortable: false },
  //   { key: 'Slot 1', sortable: false },
  //   { key: 'Slot 2', sortable: false },
  //   { key: 'Slot 3', sortable: false },
  //   { key: 'Slot 4', sortable: false },
  //   { key: 'Slot 5', sortable: false },
  //   { key: 'Slot 6', sortable: false },
  //
  // ]

  async provider(ctx: BvTableCtxObject) : Promise<Team[]>{
    if (!this.fetchedTeams) {
      await this.fetchData();
    }
    if (!this.fetchedPokemon) {
      await this.fetchPokeData()
    }
    return this.fetchedTeams;

  }

  // Method to fetch data
  async fetchData() {
    try {
      let endpoint = 'poketeam';
      this.fetchedTeams = await fetchData(endpoint, this.GymLeaderToken);
      console.log(this.fetchedTeams)

    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      let endpoint = 'pokemon';
      this.fetchedPokemon = await fetchData(endpoint, this.GymLeaderToken);
      console.log(this.fetchedPokemon)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    try {
      await this.setTeamSprites()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchPokeData() {

  }


  async setTeamSprites() {
    console.log('sts')
    console.log(this.fetchedTeams)
    const ft = Array.from(this.fetchedTeams);
    for (const team of ft) {
      team.spriteURLs = this.getTeamSprites(team.poke1, team.poke2, team.poke3, team.poke4, team.poke5, team.poke6);
      console.log(team.spriteURLs)
    }
    console.log('sprite fetch done')
  }

  getTeamSprites(p1: number, p2: number, p3: number, p4: number, p5: number, p6: number) {
    const ids = [p1, p2, p3, p4, p5, p6]
    const sprites = [];
    console.log('get team')
    for (let i = 0; i < ids.length; i++) {
      const id = ids[i];
      const pokemon = this.fetchedPokemon.find((poke: any) => poke.pokeID === id);
      pokemon ? sprites.push(pokemon.sprite) : sprites.push('../assets/pokeball.png');
    }
    return sprites;
  }


  // Fetch data when component is mounted
  async mounted() {
    await this.fetchData();
  }
}
</script>

<template>
  <div class="border">
    <h1>PokeTeams</h1>
    <!-- Iterate over each pokemon and create a PokeCard for each one -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-wrap col-12 justify-content-center">
        <div
          v-for="team in fetchedTeams"
          :key="team.teamID"
          class="p-2 d-flex col-12
        justify-content-center">
          <TeamCard
            @party=""
            :team-i-d="team.teamID"
            :team-name="team.teamName"
            :poke1="team.poke1"
            :poke2="team.poke2"
            :poke3="team.poke3"
            :poke4="team.poke4"
            :poke5="team.poke5"
            :poke6="team.poke6"
            sprite1=""


            variant="light"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
<!--            :sprite1="team.spriteURLs ? team.spriteURLs[0] : pokeballPath"-->
<!--            :sprite2="team.spriteURLs ? team.spriteURLs[1] : pokeballPath"-->
<!--            :sprite3="team.spriteURLs ? team.spriteURLs[2] : pokeballPath"-->
<!--            :sprite4="team.spriteURLs ? team.spriteURLs[3] : pokeballPath"-->
<!--            :sprite5="team.spriteURLs ? team.spriteURLs[4] : pokeballPath"-->
<!--            :sprite6="team.spriteURLs ? team.spriteURLs[5] : pokeballPath"-->
