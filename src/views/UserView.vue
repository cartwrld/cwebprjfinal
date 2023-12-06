<script lang="ts">
import { Vue, Component, Mixins  } from 'vue-property-decorator';
import { BTable, BvTableCtxObject } from 'bootstrap-vue/src/components/table';
import UserCard from '@/components/UserCard.vue';
import fetchData from '../services/apiService';

import GlobalMixin from '@/mixins/global-mixin';
import AutoSearch from '@/components/AutoSearch.vue';
import UserForm from '@/components/UserForm.vue';
import User from '@/models/User';

@Component({
  components: { UserCard },
})
export default class UserView  extends Mixins(GlobalMixin){
  fetchedUsers: any = null;

  RookieToken = 'iHaveReadAccess'
  TrainerToken = 'iHaveWriteAccess'
  GymLeaderToken = 'iHaveAdminAccess'

  viewUsers = false;
  // token = '';

  // provider(ctx:BvTableCtxObject):Promise<any> {
  //   // return fetch('' + ctx.apiUrl).then(res => res.json())
  //   return this.callAPI(`${ctx.apiUrl}`);
  // }

  // Method to fetch data
  async fetchData() {
    try {
      const endpoint = 'users';
      this.fetchedUsers = await fetchData(endpoint, this.GymLeaderToken);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // Fetch data when component is mounted
  async mounted() {
    await this.fetchData();
  }

  showUserModal(): void {
    this.viewUsers = true;
  }

  $refs!: {
    userTable: BTable
  }


  // data variable
  selectedUser:User = new User()

  // computed from b-table localItems
  get userList() {
    return this.$refs.userTable.localItems;
  }


  // region METHODS

  selectRow(item:any) {
    if (!item.id) return;
    this.$refs.userTable.selectRow(this.userList.findIndex((i:any) => i.id === item.id));
  }

  refreshTable() {
    this.$refs.userTable.refresh();
  }

  handleSelect(user:User) {
    this.selectRow(user);
    this.selectedUser = user;
  }

  handleAdd(user:User) {
    // UserForm emits a user when a new user returns from the api
    this.userList.unshift(user);
    this.handleSelect(user);
  }

  handleUpdate(user:User) {
    // UserForm emits a user when an existing user is updated in the api

    // update the values in the selectedUser to the updated values
    Object.assign(this.selectedUser, user);
  }

  handleDelete(user:User) { // UserForm emits a user when an existing user is deleted in the api
    this.selectedUser = new User();
    // find the user in the user array
    const index = this.userList.findIndex((s:any) => s.id === user.id);
    if (index >= 0) this.userList.splice(index, 1);

    // this.refreshTable()
  }

  handleReset(user:User) { // UserForm emits a user when an existing user fails to delete in the api
    // issue happened with delete - so reload pokeList
    this.refreshTable();
  }

  handleCancel() { // UserForm emits that the cancel button was clicked
    // do nothing at this point
  }
}
</script>

<template>
  <div class="border ">
    <h1>User</h1>
    <!-- Iterate over each user and create a PokeCard for each one -->
    <div class="d-flex justify-content-center align-items-center">
      <div class="d-flex flex-wrap col-11 justify-content-center">
        <div
          v-for="user in fetchedUsers"
          :key="user.id"
          class="d-flex justify-content-center">
          <UserCard
            :id="user.id"
            :username="user.username"
            :access-level="user.accessLevel"
            :token="user.token"
            variant="light"


          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
