<template>
  <div id="input-field-component">
    <label class="block text-left text-black text-sm font-bold mb-0">
      {{ label }}
    </label>
    <input
      :id="id"
      ref="inputField"
      :name="id"
      :type="type"
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
      }, type: {
        type: String,
        default: ''
      }, label: {
        type: String,
        default: ''
      }, value: {
        type: String,
        default: ''
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