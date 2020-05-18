<template>
  <div 
    v-if="errors && errors.length > 0"
    id="field-error-message-component" class="text-sm"
  >
    <p 
      v-for="(error,i) in errors"
      :key="'error-'+i" 
      class="text-red-500 italic" 
    >
      <small>{{ error }}</small>
    </p>
  </div>
</template>
<script>
  export default {
    props: {
      errors: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {};
    },
    mounted() {},
    methods: {}
  }
</script>
<style lang="css" scoped>
</style>