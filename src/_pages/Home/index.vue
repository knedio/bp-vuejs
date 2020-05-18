<template>
  <MainLayout>
    <template #content>
      <div class="flex w-full">
        <div class="flex flex-1 flex-col">
          <div class="flex flex-col">
            <span class="font-bold text-lg">Todo List</span>
          </div>
          <div class="flex flex-col w-full mb-2">
            <Button
              class="py-2"
              :label="`${ !isNew ? 'Create new' : 'Cancel'}`"
              size="w-56 py-2"
              variant="info"
              round="rounded-full"
              @onClick="onCreate()"
            />
            <ListForm 
              :isNew="isNew"
              class="w-64"
            />
          </div>
          <div class="flex flex-col w-full mb-2">
            <List />
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>
<script>
  import MainLayout from '_layouts';
  import Button from '_components/Button';
  import ListForm from '_components/Modules/UserList/ListForm';
  import List from '_components/Modules/UserList/List';

  export default {
    name: 'Dashboard',
    components: {
      MainLayout,
      Button,
      ListForm,
      List
    },
    data() {
      return {
        isNew: false
      }
    },
    computed: {
      AUTH_USER() {
        return this.$store.getters.AUTH_USER;
      },
      USER_LIST() {
        return this.$store.getters.USER_LIST;
      }
    },
    watch: {
      AUTH_USER(newVal, oldVal) {
        if(newVal?.data?.id) {
          this.onFetchUserList(newVal.data.id)
        }
      },
      USER_LIST(newVal) {
        if(newVal.id) {
          this.isNew = true;
        }
      }
    },
    mounted() {
      (async() => {
        await this.$store.commit('SET_USER_LISTS', [])
        if(this.AUTH_USER?.data?.id) {
          this.onFetchUserList(this.AUTH_USER.data.id)
        }
      })()
    },
    methods: {
      onFetchUserList(id)
      {
        this.$store.dispatch('FETCH_USER_LISTS', id);
      },
      async onCreate()
      {
        this.isNew = !this.isNew
        if(!this.isNew) {
          await this.$store.commit('SET_USER_LIST', {
            id: null,
            name: '',
            description: ''
          })
        }
      }
    }
  }
</script>
<style lang='css' scoped>
</style>