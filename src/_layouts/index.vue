<template>
  <div 
    id="main-layout-component"
    class="w-full flex flex-row"
  >
    <Sidebar />
    <div class="w-full p-8 flex">
      <slot name="content" />
    </div>
  </div>
</template>
<script>
  import Sidebar from '_components/Menus/Sidebar'
  export default {
    components: {
      Sidebar
    },
    props: [],
    data() {
      return {};
    },
    mounted() {},
    methods: {}
  }
</script>
<style lang="css" scoped>
</style>