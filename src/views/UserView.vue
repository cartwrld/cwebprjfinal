<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import fetchData from '../services/apiService';

@Component({})
export default class PokemonTeamView extends Vue {
  data: any = null;

  token = 'iHaveReadAccess';

  fields = [
    { key: 'ID', sortable: true },
    { key: 'Username', sortable: false },
    { key: 'Access Level', sortable: false },
    { key: 'Token', sortable: false },

  ];

  async provider(ctx: BvTableCtxObject) {
    if (!this.data) {
      await this.fetchData();
    }
    return this.data;
  }

  // Method to fetch data
  async fetchData() {
    try {
      const endpoint = 'users';
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
    <h1>Users</h1>
    <b-table :provider="provider" :fields="fields"/>
  </div>
</template>

<style scoped>

</style>
