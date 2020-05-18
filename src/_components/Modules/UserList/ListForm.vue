<template>
  <div 
    v-if="isNew"
    class="w-full"
  >
    <form 
      :key="isNew"
      class="list-container shadow-lg w-full" 
      @submit.prevent
    >
      <div v-if="error" class="text-center mb-2">
        <span class="text-red-500 bold">{{ error }}</span>
      </div>
      <div>
        <InputField
          id="name"
          v-model="listForm.name"
          class="m-2"
          label="Name *"
          type="text"
          :errors="errorMessages.name"
        />
        <TextAreaField
          id="description"
          v-model="listForm.description"
          class="m-2"
          label="Description"
          :errors="errorMessages.description"
          rows="2"
        />
      </div>
      <div class="flex justify-between">
        <Button
          class="ml-auto py-1 px-2"
          variant="info"
          :disabled="submitting"
          :isLoading="submitting"
          :label="`${ listForm.id ? 'Update' : 'Save' }`"
          @onClick="onSubmit()"
        />
      </div>
    </form>
  </div>
</template>
<script>
  import InputField from '_components/Form/InputField';
  import TextAreaField from '_components/Form/TextAreaField';
  import Button from '_components/Button';

  export default {
    components: {
      InputField,
      TextAreaField,
      Button
    },
    props: {
      isNew: Boolean
    },
    data() {
      return {
        submitting: false,
        error: '',
        errorMessages: [],
        listForm: {
          id: null,
          name: '',
          description: ''
        }
      };
    },
    computed: {
      USER_LIST() {
        return this.$store.getters.USER_LIST;
      }
    },
    watch: {
      isNew(newVal) {
        if(newVal && this.USER_LIST.id) {
          this.listForm = {
            id: this.USER_LIST.id,
            name: this.USER_LIST.name,
            description: this.USER_LIST.description
          }
        } else {
          this.listForm = {
            name: '',
            description: ''
          }
        }
      },
      USER_LIST(newVal) {
        if(newVal.id) {
          this.listForm = {
            id: newVal.id,
            name: newVal.name,
            description: newVal.description
          }
        }
      },
    },
    mounted() {
    },
    methods: {
      async onSubmit() 
      {
        try {
          this.submitting = true
          this.errorMessages = []
          const url = (this.listForm.id) ? 'UPDATE_USER_LIST' : 'ADD_USER_LIST'
          const { data } = await this.$store.dispatch(url, this.listForm)
          this.listForm = {
            name: '',
            description: ''
          }
          this.submitting = false
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
  .list-container {
    width: 400px;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 5px 10px;
  }
</style>