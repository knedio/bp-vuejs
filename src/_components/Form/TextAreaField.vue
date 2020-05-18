<template>
  <div id="text-area-field-component">
    <label class="block text-left text-gray-700 text-sm font-bold mb-0">{{ label }}</label>
    <textarea
      :id="id"
      ref="inputField"
      :rows="rows"
      :name="id"
      class="input-field"
      :class="{ 'text-red-500 border-red-500': errors && errors.length > 0 }"
      :value="value"
      @input="onUpdateField()"
    />
    <ErrorMessage :errors="errors" />
  </div>
</template>
<script>
  import ErrorMessage from './FieldErrorMessage'

  export default {
    components: {
      ErrorMessage
    },
    props: {
      id: {
        type: [Number, String],
        default: null
      }, label: {
        type: String,
        default: ''
      }, value: {
        type: String,
        default: ''
      }, rows: {
        type: String,
        default: '3'
      }, errors: {
        type: Array,
        default() {
          return []
        }
      },
    },
    data() {
      return {};
    },
    mounted() {},
    methods: {
      onUpdateField() {
        this.$emit('input', this.$refs.inputField.value);
      }
    }
  }
</script>
<style lang='css' scoped>
</style>