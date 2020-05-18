<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'App',
    components: {
    },
    mounted() {
      (async() => {
        await this.FETCH_AUTH_USER()
      })()
    },
    methods: {
      async FETCH_AUTH_USER()
      {
        try {
          const data = await this.$store.dispatch('AUTH_SHOW')
        } catch (err) {
          this.submitting = false
          console.log('err', err)
        }
      }
    }
  }
</script>
<style>
</style>
