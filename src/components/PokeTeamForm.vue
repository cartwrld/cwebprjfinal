<script lang="ts">
import {Vue, Component, Prop, Watch} from "vue-property-decorator";
import PokeTeam from "@/models/PokeTeam";
import IconButton from "@/components/IconButton.vue";
import {validate} from "class-validator";

@Component({
  components: {IconButton},
})

// COLONS ARE FOR BINDING PROPS
export default class PokeTeamForm extends Vue {
  // NOTE: Props are how a parent component communicates to the child
  // DON'T MODIFY THE FUCKING PROP - Ernesto
  @Prop({type: PokeTeam, validator: (s) => s instanceof PokeTeam})
  readonly poketeam!: PokeTeam;
  @Prop() private readonly disabled!: boolean;

  tempPokeTeam = new PokeTeam();
  showConfirmDelete = false;
  isBusy = false;
  animateSave = false;
  animateDelete = false;

  get isDisabled() {
    // TODO check the value of the disable prop of this component
    return this.isBusy || this.disabled;
  }

  get isNew() {
    return !this.poketeam || !this.poketeam.teamID;
  }

  @Watch("poketeam", {deep: true})
  onPokeTeamChanged(newPokeTeam: PokeTeam, oldPokeTeam: PokeTeam) {
    if (!newPokeTeam || !newPokeTeam.teamID) {
      this.tempPokeTeam = new PokeTeam();
    } else if (!oldPokeTeam || newPokeTeam.teamID !== oldPokeTeam.teamID) {
      // DON'T DO THIS, THIS IS MODIFYING THE PROP!!!!!
      // this.tempPokeTeam = this.poketeam;
      //instead, do this, or...
      // this.tempPokeTeam = Object.assign({}, this.poketeam);
      // this.tempPokeTeam = { ...this.poketeam }; // must make a new object - DON'T MODIFY THE PROP
      this.tempPokeTeam = Object.assign(new PokeTeam(), this.poketeam);
    }
  }

  setBusy(toggle: boolean) {
    this.isBusy = toggle;
    this.$emit("busy", toggle);
  }

  async savePokeTeam() {
    // DONE! disable all of the form inputs
    this.setBusy(true);
    // DONE! animate the icon of the save button
    this.animateSave = true;

    // TODO validate tempPokeTeam data before sending fetch request
    const errors = await validate(this.tempPokeTeam);

    console.log(errors);

    if (errors.length === 0) {
      const result = await fetch(
        `http://localhost:3006/poketeams/${this.tempPokeTeam.teamID || ""}`,
        {
          method: this.tempPokeTeam.teamID ? "PUT" : "POST",
          body: JSON.stringify(this.tempPokeTeam),
          headers: {"Content-Type": "application/json; charset=utf-8"},
        }
      );

      const data = await result.json();

      const savedPokeTeam = Object.assign(new PokeTeam(), data);

      // DONE! - Fix fetch and Emit the new/updated PokeTeam
      this.$emit(this.tempPokeTeam.teamID ? "updated" : "added", savedPokeTeam);

      // NOTE: Emits are how a child component communicates to a parent component
    }

    //DONE Re-enable the form inputs
    this.setBusy(false);

    // DONE TODO stop the button animation
    this.animateSave = false;
  }

  async deletePokeTeam() {
    // TODO figure out how to delete from JSON-SERVER
    // make fetch request with proper fetch options

    // DONE disable all of the form inputs
    this.isBusy = true;

    // DONE animate the icon of the save button
    this.animateDelete = true;

    const result = await fetch(
      `http://localhost:3006/poketeams/${this.poketeam.teamID}`, //same as tempPokeTeam
      {
        method: "DELETE",
      }
    );
    // emit to the parent that a deletion occurred
    if (result.ok) {
      this.$emit("deleted", this.poketeam);
    }

    //TODO deal with delete getting 404

    //DONE Re-enable the form inputs
    this.isBusy = false;
    this.$emit("busy", this.isBusy);

    // DONE stop the button animation
    this.animateDelete = false;
  }

  cancel() {
    this.tempPokeTeam = {...this.poketeam};
    // OR
    // Object.assign(this.tempPokeTeam, this.poketeam);
  }
}
</script>

<template>
  <div>
    <!-- GivenName -->
    <b-form-group
      class="mb-1"
      invalid-feedback="You suck idiot!"
      :state="false"
    >
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Team Name'">
          <b-icon-person-fill title="Team Name"/>
        </b-input-group-prepend>
        <b-form-input
          :state="false"
          :disabled="isDisabled"
          placeholder="Team Name"
          v-model="tempPokeTeam.teamName"
        />
      </b-input-group>
    </b-form-group>

    <div class="border border-1 my-3 w-100"></div>
    <div>
      <input placeholder="">
    </div>

    <!-- FamilyName -->
    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 1'">
          <b-icon-people-fill title="Slot 1"/>
        </b-input-group-prepend>
        <b-form-input
          number
          :disabled="isDisabled"
          placeholder="Slot 1"
          v-model="tempPokeTeam.poke1"
        />
      </b-input-group>
    </b-form-group>

    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 2'">
          <b-icon-people-fill title="Slot 2"/>
        </b-input-group-prepend>
        <b-form-input
          number
          :disabled="isDisabled"
          placeholder="Slot 2"
          v-model="tempPokeTeam.poke2"
        />
      </b-input-group>
    </b-form-group>
    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 3'">
          <b-icon-people-fill title="Slot 3"/>
        </b-input-group-prepend>
        <b-form-input
          :disabled="isDisabled"
          placeholder="Slot 3"
          v-model="tempPokeTeam.poke3"
        />
      </b-input-group>
    </b-form-group>
    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 4'">
          <b-icon-people-fill title="Slot 4"/>
        </b-input-group-prepend>
        <b-form-input
          :disabled="isDisabled"
          placeholder="Slot 4"
          v-model="tempPokeTeam.poke4"
        />
      </b-input-group>
    </b-form-group>
    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 5'">
          <b-icon-people-fill title="Slot 5"/>
        </b-input-group-prepend>
        <b-form-input
          :disabled="isDisabled"
          placeholder="Slot 5"
          v-model="tempPokeTeam.poke5"
        />
      </b-input-group>
    </b-form-group>
    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 6'">
          <b-icon-people-fill title="Slot 6"/>
        </b-input-group-prepend>
        <b-form-input
          :disabled="isDisabled"
          placeholder="Slot 6"
          v-model="tempPokeTeam.poke6"
        />
      </b-input-group>
    </b-form-group>
    <b-form-group class="mb-1">
      <b-input-group>
        <b-input-group-prepend is-text v-b-tooltip.hover.right="'Slot 6'">
          <b-icon-people-fill title="Slot 6"/>
        </b-input-group-prepend>
        <b-form-input
          :disabled="isDisabled"
          placeholder="Slot 6"
          v-model="tempPokeTeam.poke6"
        />
      </b-input-group>
    </b-form-group>


    <!-- Buttons -->
    <b-button-group class="w-100 mb-3">
      <IconButton
        variant="primary"
        icon="cloud-arrow-up-fill"
        @party="savePokeTeam"
        animation-style="cylon-vertical"
        :animate="animateSave"
      >
        Save
      </IconButton>
      <!--      TODO --- disable delete button when the poketeam is empty or no id -->

      <IconButton
        :disabled="isDisabled || isNew"
        icon="hurricane"
        variant="danger"
        @party="showConfirmDelete = true"
        animation-style="spin-reverse"
        :animate="animateDelete"
      >Delete
      </IconButton
      >
      <IconButton
        :disabled="isDisabled"
        variant="primary"
        icon="x-octagon"
        @party="cancel"
      >Cancel
      </IconButton
      >
    </b-button-group>
    <b-modal
      title="Delete PokeTeam"
      v-model="showConfirmDelete"
      ok-variant="danger"
      cancel-variant="primary"
      @ok="deletePokeTeam"
    >
      <template #modal-ok>
        <b-icon-hurricane/>
        Delete
      </template>
      <template #modal-cancel>
        <b-icon-x-octagon/>
        Cancel
      </template>
      Are you sure you want to delete {{ poketeam.teamName }},
      {{ poketeam.teamName }}?
    </b-modal>
  </div>
</template>

<style scoped></style>
<!--     DO NOT MODIFY THE PROPS!!!!!!!!!!!!!     -->
<!--          v-model="poketeam.familyName"-->
