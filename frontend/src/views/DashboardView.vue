<template>
  <div class="dashboard">
    <SideNav />
    <ScrollContainer />
  </div>
</template>
  
<script>
  import SideNav from '../components/SideNav.vue'
  import ScrollContainer from '../components/ScrollContainer.vue'
  
  export default {
    name: 'DashboardView',
    components: {
      SideNav,
      ScrollContainer
    }
  }
</script>

<style scoped lang="scss">
  .dashboard {
    display: flex;
    height: 100vh;
    overflow-y: hidden;
    width: 100%;
  }
</style>