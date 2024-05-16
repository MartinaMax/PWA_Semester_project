<template>
  <body class="dashboardview" >
    <SideNav />
    <main class="dashboard">
      <DashboarHeader />
      <ScrollContainer />
    </main>
  </body>
</template>
  
<script>
  import SideNav from '../components/SideNav.vue'
  import ScrollContainer from '../components/ScrollContainer.vue'
  import DashboarHeader from '../components/DasboardHeader.vue'
  
  export default {
    name: 'DashboardView',
    components: {
      SideNav,
      ScrollContainer,
      DashboarHeader
    }
  }
</script>

<style scoped>
  .dashboardview{
    display: flex;
    height: 100vh;
    overflow-y: hidden;
    width: 100%;
  }

  .dashboard {
    padding: 30px 75px;
    width: 100%;
  }
</style>