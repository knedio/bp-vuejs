<template>
  <div id="login-form-component">
    <form 
      class="container" 
      @submit.prevent
    >
      <div v-if="error" class="text-center mb-2">
        <span class="text-red-500 bold">{{ error }}</span>
      </div>
      <div>
        <InputField
          id="email"
          v-model="loginForm.email"
          class="m-2"
          label="Email Address"
          type="email"
          :errors="errorMessages.email"
        />
        <InputField
          id="password"
          v-model="loginForm.password"
          class="m-2"
          label="Password"
          type="password"
          :errors="errorMessages.password"
        />
      </div>
      <div class="flex justify-between">
        <button
          type="submit"
          class="ml-auto text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-none"
          :disabled="submitting"
          @click="onSubmit()"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</template>
<script>
  import InputField from "_components/Form/InputField";

  export default {
    name: 'LoginForm',
    components: {
      InputField
    },
    data() {
      return {
        submitting: false,
        error: "",
        errorMessages: [],
        loginForm: {
          email: "",
          password: ""
        }
      };
    },
    mounted() {},
    methods: {
      onSubmit() {
        
      }
    }
  };
</script>
<style lang="css" scoped>
  .container {
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.175);
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.6);
    padding: 20px 35px;
  }
</style>