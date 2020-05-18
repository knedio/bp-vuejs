<template>
  <div id="login-form-component">
    <form class="container shadow-lg" @submit.prevent>
      <div v-if="error" class="text-center mb-2">
        <span class="text-red-500 bold">{{ error }}</span>
      </div>
      <div>
        <InputField
          id="email"
          v-model="registerForm.email"
          class="m-2"
          label="Email Address *"
          type="email"
          :errors="errorMessages.email"
        />
        <InputField
          id="firstName"
          v-model="registerForm.firstName"
          class="m-2"
          label="First Name *"
          type="firstName"
          :errors="errorMessages.firstName"
        />
        <InputField
          id="middleName"
          v-model="registerForm.middleName"
          class="m-2"
          label="Middle Name"
          type="middleName"
          :errors="errorMessages.middleName"
        />
        <InputField
          id="lastName"
          v-model="registerForm.lastName"
          class="m-2"
          label="Last Name *"
          type="lastName"
          :errors="errorMessages.lastName"
        />
        <InputField
          id="password"
          v-model="registerForm.password"
          class="m-2"
          label="Password *"
          type="password"
          :errors="errorMessages.password"
        />
        <InputField
          id="confirmPassword"
          v-model="registerForm.confirmPassword"
          class="m-2"
          label="Confirm Password *"
          type="password"
          :errors="errorMessages.confirmPassword"
        />
      </div>
      <div class="flex justify-between">
        <router-link 
          class="py-1 px-2 text-sm text-gray-700" 
          to="/login"
        >
          Cancel
        </router-link>
        <Button
          class="ml-auto py-1 px-2"
          variant="info"
          :disabled="submitting"
          :isLoading="submitting"
          label="Register"
          @onClick="onSubmit()"
        />
      </div>
    </form>
  </div>
</template>
<script>
  import { setToken } from "_helpers/ApiService";
  import InputField from "_components/Form/InputField";
  import Button from "_components/Button";

  export default {
    name: "LoginForm",
    components: {
      InputField,
      Button
    },
    data() {
      return {
        submitting: false,
        error: "",
        errorMessages: [],
        registerForm: {
          email: "",
          firstName: "",
          middleName: "",
          lastName: "",
          password: "",
          confirmPassword: ""
        }
      };
    },
    computed: {
      AUTH_USER() {
        return this.$store.getters.AUTH_USER;
      }
    },
    mounted() {},
    methods: {
      async onSubmit() {
        try {
          this.submitting = true;
          this.errorMessages = [];
          const { token, user } = await this.$store.dispatch(
            "REGISTRATION",
            this.registerForm
          );
          this.submitting = false;
          this.$router.push("/login");
        } catch (err) {
          this.submitting = false;
          if (err.response?.status === 422) {
            this.errorMessages = err.response.data.errors;
          } else if (err.response?.status === 404) {
            this.error = err.response.data.message;
          }
          console.log("err", err);
        }
      }
    }
  }
</script>
<style lang='css' scoped>
.container {
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 20px 35px;
}
</style>