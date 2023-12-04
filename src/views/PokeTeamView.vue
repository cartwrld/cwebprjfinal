<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {BvTableCtxObject} from 'bootstrap-vue/src/components/table';
import TeamCard from '@/components/TeamCard.vue';
import fetchData from '../services/apiService';

@Component({
  components: {TeamCard},
})
export default class PokemonTeamView extends Vue {
  fetchedTeams: any = null;

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

  async provider(ctx: BvTableCtxObject) {
    if (!this.fetchedTeams) {
      this.fetchedTeams = await this.fetchData();
    }
    console.log(await this.fetchedTeams);

    return this.fetchedTeams;
  }

  // Method to fetch data
  async fetchData() {
    try {
      const endpoint = 'poketeam';
      this.fetchedTeams = await fetchData(endpoint, this.GymLeaderToken);
      await this.fetchImageData()
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  async fetchImageData() {
    try {

      for (let i = 0; i < this.fetchedTeams.length; i++) {

        this.fetchedTeams[i].spriteURLs = [];

        const ft = this.fetchedTeams;
        const pokes = [ft.poke1, ft.poke2, ft.poke3, ft.poke4, ft.poke5, ft.poke6]

        for (let i = 0; i < pokes.length; i++) {
          if (pokes[i] != undefined && pokes[i] != null) {
            const endpoint = `pokemon/${pokes[i]}`;
            console.log(endpoint)
            const pokeData = await fetchData(endpoint , this.GymLeaderToken);
            // console.log(await pokeData.json().name)
          }
        }

      }


    } catch (error) {
      console.error('Error fetching data:', error);
    }
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
          :key="team.id"
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
            variant="light"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
