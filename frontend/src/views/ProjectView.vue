<template>
    <body class="projectview" >
      <SideNav />
      <main class="projectdashboard">
        <ProjectHeader/>
        <TaskContainer/>
      </main>
    </body>
  </template>
    
  <script>
    import SideNav from '../components/SideNav.vue'
    import ProjectHeader from '../components/ProjectHeader.vue'
    import TaskContainer from '../components/TaskConatiner.vue'
    
    export default {
      name: 'DashboardView',
      components: {
        SideNav,
        ProjectHeader,
        TaskContainer
      }
    }
  </script>
  
  <style scoped lang="scss">
    .projectview{
      display: flex;
      height: 100vh;
      overflow-y: hidden;
      width: 100%;
    }
  
    .projectdashboard {
      padding: 30px 75px;
      width: 100%;
    }
  </style>