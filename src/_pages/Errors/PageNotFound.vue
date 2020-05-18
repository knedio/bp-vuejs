<template>
  <div class="flex">
    <div class="flex flex-1 justify-center items-center flex-col">
      <p>
        <span class="font-bold text-base">Sorry!</span> 
        The page you've access is not available.
      </p>
      <p>
        <router-link 
          :to="`${ AUTH_USER.isAuth ? '/home' : '/login' }`"
          class="text-blue-600 font-bold p-4"
        >
          Back
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PageNotFound',
    components: {
    },
    data() {
      return {
        submitting: false
      };
    },
    computed: {
      AUTH_USER() {
        return this.$store.getters.AUTH_USER;
      }
    },
    mounted() {},
    methods: {}
  };
</script>
<style lang='css' scoped>
</style>