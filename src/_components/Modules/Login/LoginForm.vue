<template>
  <div id="login-form-component">
    <form 
      class="container shadow-lg" 
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
        <router-link
          class="py-1 px-2 text-sm text-blue-700"
          to="/registration"
        >
          Create an Account?
        </router-link>
        <Button
          class="ml-auto py-1 px-2"
          variant="info"
          :disabled="submitting"
          :isLoading="submitting"
          label="Login"
          @onClick="onSubmit()"
        />
      </div>
    </form>
  </div>
</template>
<script>
  import { setToken } from '_helpers/ApiService'
  import InputField from '_components/Form/InputField';
  import Button from '_components/Button';

  export default {
    name: 'LoginForm',
    components: {
      InputField,
      Button
    },
    data() {
      return {
        submitting: false,
        error: '',
        errorMessages: [],
        loginForm: {
          email: '',
          password: ''
        }
      };
    },
    mounted() {
    },
    methods: {
      async onSubmit() 
      {
        try {
          this.submitting = true
          this.errorMessages = []
          const { token, user } = await this.$store.dispatch('LOGIN', this.loginForm)
          await setToken()
          const auth = {
            isAuth: true,
            token,
            data: user,
          }
          this.$store.commit('SET_AUTH_USER', auth)
          localStorage.setItem('_auth', JSON.stringify(auth))
          this.submitting = false
          this.$router.push('/home')
        } catch (err) {
          this.submitting = false
          if(err.response?.status === 422) {
            this.errorMessages = err.response.data.errors
          } else if(err.response?.status === 404) {
            this.error = err.response.data.message
          }
          console.log('err', err)
        }
      }
    }
  };
</script>
<style lang='css' scoped>
  .container {
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 20px 35px;
  }
</style>