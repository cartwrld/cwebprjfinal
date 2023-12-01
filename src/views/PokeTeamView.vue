<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import fetchData from '../services/apiService';

@Component({})
export default class PokemonTeamView extends Vue {
  data: any = null;

  token = 'iHaveReadAccess';

  fields = [
    { key: 'Team ID', sortable: true },
    { key: 'Team Name', sortable: false },
    { key: 'Slot 1', sortable: false },
    { key: 'Slot 2', sortable: false },
    { key: 'Slot 3', sortable: false },
    { key: 'Slot 4', sortable: false },
    { key: 'Slot 5', sortable: false },
    { key: 'Slot 6', sortable: false },

  ]

  async provider(ctx: BvTableCtxObject) {
    if (!this.data) {
      await this.fetchData();
    }
    return this.data;
  }

  // Method to fetch data
  async fetchData() {
    try {
      const endpoint = 'poketeam';
      this.data = await fetchData(endpoint, this.token);
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
  <div>
    <h1>PokeTeams</h1>

    <b-table :provider="provider" :fields="fields"></b-table>
  </div>
</template>

<style scoped>

</style>
