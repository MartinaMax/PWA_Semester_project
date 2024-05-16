<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <TaskModal/>
</template>

<script>
  import TaskModal from '../components/TaskModal.vue'

  export default {
    name: 'DashboardView',
    components: {
      TaskModal
    }
  }
</script>
