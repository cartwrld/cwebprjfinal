<template>
  <div class="login-container">
    <div class="login-box">
      <h2 class="login-heading">Login</h2>
      <b-form @submit.prevent="login" class="login-form">
        <b-form-group label="Username" label-for="username-input">
          <b-form-input
            v-model="username"
            required
            placeholder="Enter your username"
            id="username-input"
            class="rounded shadow-sm"
          />
        </b-form-group>

        <b-form-group label="Password" label-for="password-input">
          <b-form-input
            v-model="password"
            type="password"
            required
            placeholder="Enter your password"
            id="password-input"
            class="rounded shadow-sm"
          />
        </b-form-group>

        <b-button type="submit" variant="primary" class="rounded-3 p-3 col-12">
          Login
        </b-button>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Mixins} from 'vue-property-decorator';
import { RawLocation } from 'vue-router';
import { BForm, BFormGroup, BFormInput, BButton } from 'bootstrap-vue';
import GlobalMixin from '@/mixins/global-mixin';

/**
 * This component is for ...
 * @Authors Carter Walsh (walsh0715) & Mike Williams (williams2070)
 * @Date December-08-2023
 * @Course CWEB280
 */
@Component({
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
  },
})
export default class Login extends Mixins(GlobalMixin) {
  username = '';
  password = '';
  userID = 0;
  async login() {
    try {
      switch (this.username) {
        case 'Gary':
          this.userID = 1;
          break;
        case 'Ash':
          this.userID = 2;
          break;
        case 'ProfOak':
          this.userID = 3;
          break;
        default:
        // code to be executed if none of the cases match
      }

      // Use the user's ID to construct the API URL
      const url = this.USER_API + `/${this.userID}`;

      // Make the API call using the correct URL
      const response = await this.callAPI(url, 'get', {}, 'iHaveReadAccess');

      const token = response.token; // Use the token from the found user

      localStorage.setItem('authToken', token);

      console.log(response);
      console.log(token);

      await this.$router.push('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Align the form to the top of the container */
  height: 100vh;
}

.login-box {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.login-heading {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  width: 100%;
}
</style>
