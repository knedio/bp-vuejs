<template>
  <div class="w-full">
    <table class="list-table">
      <thead>
        <tr>
          <th class="list-no" />
          <th class="list-name">
            Name
          </th>
          <th class="list-description">
            Description
          </th>
          <th class="list-action">
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(list, index) in USER_LISTS"
          :key="`list-${index}`"
        >
          <td>
            {{ index+1 }}
          </td>
          <td>
            {{ list.name }}
          </td>
          <td>
            {{ list.description }}
          </td>
          <td>
            <a 
              class="mr-1 text-blue-700"
              href="javascript:void(0)"
              @click="onUpdate(list)"
            >
              Update
            </a>
            <a 
              class="mr-1 text-blue-700"
              href="javascript:void(0)"
              @click="onDelete(list)"
            >
              Delete
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    components: {},
    data() {
      return {
        lists: []
      }
    },
    computed: {
      AUTH_USER() {
        return this.$store.getters.AUTH_USER;
      },
      USER_LISTS() {
        return this.$store.getters.USER_LISTS;
      }
    },
    created() {
    },
    methods: {
      async onDelete(item)
      {
        await this.$store.dispatch('DELETE_USER_LIST', item)
      },
      async onUpdate(item)
      {
        await this.$store.commit('SET_USER_LIST', item)
      }
    }
  }
</script>
<style>
  .list-table {
    border-collapse: collapse;
    width: 100%;
  }
  .list-table td, .list-table th {
    border: 1px solid #ddd;
    padding: 8px;
  }
  .list-table tr:nth-child(even){
    background-color: #f2f2f2;
  }
  .list-table tr:hover {
    background-color: #ddd;
  }
  .list-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #ccc;
    color: #000;
    font-size: 14px;
  }
  .list-table td {
    font-size: 12px;
  }
  .list-table .list-no {
    width: 5%;
  }
  .list-table .list-name {
    width: 15%;
  }
  .list-table .list-description {
    width: 60%;
  }
  .list-table .list-action {
    width: 20%;
  }
</style>