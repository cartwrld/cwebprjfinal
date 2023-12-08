<template>
  <div class="d-flex justify-content-center col-12 p-0">

    <b-button
      class="p-2 rounded-2 col-12"
      :variant="variant"
      @click="showTeamModal">
      <div
        class="d-flex justify-content-between align-items-center bg-danger rounded-4 px-3 m-0 shadow
        px-0 team-card">

        <div class="d-flex justify-content-center col-1">
          <span
            class="bg-light p-2 px-3 rounded-5 border fw-semibold h5 pe-3 text-dark mt-2
            shadow-sm">
            {{ teamID }}</span>
        </div>

        <div class="d-flex justify-content-center align-items-center text-light col-3">
          <h5 class="rounded fw-semibold mx-4 mt-2 text-shadow col-12">
            {{ teamName }}</h5>
        </div>

        <div class="d-flex flex-wrap justify-content-around align-items-center col-8 my-3">
          <div class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light mx-1 shadow">
            <img :src="sprite1" alt="poke1" width="100px" class="rounded-1 shadow"/>
          </div>
          <div class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light mx-1 shadow">
            <img :src="sprite2" alt="poke2" width="100px" class="rounded-1 shadow"/>
          </div>
          <div class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light mx-1 shadow">
            <img :src="sprite3" alt="poke3" width="100px" class="rounded-1 shadow"/>
          </div>
          <div class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light mx-1 shadow">
            <img :src="sprite4" alt="poke4" width="100px" class="rounded-1 shadow"/>
          </div>
          <div class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light mx-1 shadow">
            <img :src="sprite5" alt="poke5" width="100px" class="rounded-1 shadow"/>
          </div>
          <div class="d-flex justify-content-center align-items-center p-1 py-1 rounded bg-light mx-1 shadow">
            <img :src="sprite6" alt="poke6" width="100px" class="rounded-1 shadow"/>
          </div>
        </div>
      </div>
    </b-button>

    <b-modal
      title="View PokeTeam"
      ok-variant="success"
      cancel-variant="danger"
      v-model="viewPokeTeam"
    size="md">

      <div class="d-flex flex-column align-items-center"> <!-- BASE -->

        <div class="d-flex justify-content-around align-items-center w-100">
          <!-- id + name + gen -->

          <div class="d-flex justify-content-center align-items-center">
                        <span
                          class="bg-light p-2 px-3 rounded-5 border fw-semibold h3 pe-3 text-dark
                                  shadow-sm">
                          {{ teamID }}</span>
          </div>
          <!--          <div class="border border-dark bg-light rounded-5"> &lt;!&ndash; id container &ndash;&gt;-->
          <!--            <div class="rounded-5 fs-3 px-2 px-2"> &lt;!&ndash; id &ndash;&gt;-->
          <!--              <span class="p-0">10</span>-->
          <!--            </div>-->
          <!--          </div>-->
          <div class="d-flex justify-content-start"> <!-- name container -->
            <div class="fs-1"> <!-- name -->{{ teamName }}</div>
          </div>
        </div>

        <div class="border border-1 my-3 w-100"></div>

        <div class="d-flex flex-wrap justify-content-around align-items-center my-3">
          <div
            class="d-flex justify-content-center align-items-center p-0 mx-0 my-1 rounded bg-light mx-1 shadow-sm col-3">
            <img :src="sprite1" alt="poke1" width="300px" class="rounded-1 shadow col-12"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mx-0 p-1 my-1 rounded bg-light mx-1 shadow-sm col-3">
            <img :src="sprite2" alt="poke2" class="rounded-1 shadow col-12"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mx-0 p-1 my-1 rounded bg-light mx-1 shadow-sm col-3">
            <img :src="sprite3" alt="poke3"  class="rounded-1 shadow col-12"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mx-0 p-1 my-1 rounded bg-light mx-1 shadow-sm col-3">
            <img :src="sprite4" alt="poke4"  class="rounded-1 shadow col-12"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mx-0 p-1 my-1 rounded bg-light mx-1 shadow-sm col-3">
            <img :src="sprite5" alt="poke5"  class="rounded-1 shadow col-12"/>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mx-0 p-1 my-1 rounded bg-light mx-1 shadow-sm col-3">
            <img :src="sprite6" alt="poke6"  class="rounded-1 shadow col-12"/>
          </div>
        </div>

      </div> <!-- close BASE -->

      <template #modal-cancel>
        <b-icon-x-square-fill/>
        <span class="ps-3">Delete PokeTeam</span>
      </template>
      <template #modal-ok>
        <b-icon-cloud-arrow-up-fill/>
        <span class="ps-3">Edit PokeTeam</span>
      </template>

    </b-modal>
  </div>
</template>
<script lang="ts">
import {
  Component, Prop, Mixins,
} from 'vue-property-decorator';
import { BIcon } from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';
import PokeTeam from '@/models/PokeTeam';

@Component({})
export default class TeamCard extends Mixins(GlobalMixin) {
  @Prop() private teamID!: number;
  @Prop() private teamName!: string;
  @Prop() private poke1!: number;
  @Prop() private poke2!: number;
  @Prop() private poke3!: number;
  @Prop() private poke4!: number;
  @Prop() private poke5!: number;
  @Prop() private poke6!: number;

  // @Prop() private sprites!: string[];
  @Prop() private sprite1!: string;
  @Prop() private sprite2!: string;
  @Prop() private sprite3!: string;
  @Prop() private sprite4!: string;
  @Prop() private sprite5!: string;
  @Prop() private sprite6!: string;
  @Prop() private variant!: string;

  // capFirstLetter(val: string) {
  //   return val.charAt(0).toUpperCase() + val.slice(1);
  // }

  // async getPokemonImage(id: string): Promise<string> {
  //   const response = await fetch(`http://localhost:3004/pokemon/${id}`);
  //   const data = await response.json();
  //   console.log(data)
  //
  //   return 'https://i.imgur.com/CtkIAQO.png';
  // }

  showTeamModal(): void {
    this.viewPokeTeam = true;
  }

  // ======================================

  tempPokeTeam: PokeTeam = new PokeTeam();

  violation: any = {};

  isBusy = false;

  viewPokeTeam = false;

  // ======================================
}
</script>

<style scoped>

</style>
