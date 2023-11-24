<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class AddNewPoke extends Vue {

}
</script>

<template>
  <b-modal title="Add New Pokemon" ok-variant="danger" cancel-variant="primary"
           @ok="addPokemon" v-model="showConfirmDelete">
    <!--    using slots -- https://vuejs.org/v2/guide/components-slots.html
      slot defined in b-modal -- https://bootstrap-vue.org/docs/components/modal#comp-ref-b-modal-slots
      modify the buttons that appear in the footer of the modal using pre-defined slots-->
    <template #modal-cancel>
      <!-- add a X icon to the cancel button-->
      <b-icon-x-square-fill /> Cancel
    </template>

    <template #modal-ok>
      <!-- change the OK button to say Delete instead and add a trash can icon-->
      <b-icon-cloud-arrow-up-fill/> Add Pokemon
    </template>
    Are you sure you want to delete {{tempStudent.familyName}}, {{tempStudent.givenName}}?
  </b-modal>
</template>

<style scoped>

</style>
