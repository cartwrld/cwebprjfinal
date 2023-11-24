<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component({})
export default class ViewPokemon extends Vue {
  showPokeDetails = false;
}
</script>

<template>
  <b-modal title="View Pokemon" ok-variant="success" cancel-variant="danger"
           v-model="showPokeDetails">
    <!--    using slots -- https://vuejs.org/v2/guide/components-slots.html
      slot defined in b-modal -- https://bootstrap-vue.org/docs/components/modal#comp-ref-b-modal-slots
      modify the buttons that appear in the footer of the modal using pre-defined slots-->
    <template #modal-cancel>
      <b-icon-x-square-fill /> Cancel
    </template>
    <template #modal-ok>
      <b-icon-cloud-arrow-up-fill/> Add Pokemon
    </template>
  </b-modal>
</template>

<style scoped>

</style>
