<template>
  <div>
    <h1 class="margin-b-50">Dashboard</h1>
    <div class="project margin-b-30">
      <h2>Projects</h2>
      <button @click="openModal()">New project</button>
      <NewProjectModal  :is-open="modalOpen" @close="modalOpen = false"/>
    </div>
  </div>
</template>

<script>
  import NewProjectModal from '../components/NewProjectModal.vue'

    export default {
    name: 'DashboardHeader',
    components: {
      NewProjectModal
    },
    data() {
      return {
        modalOpen: false
      };
    },
    methods: {
      openModal() {
        this.modalOpen = true;
      }
    }
  }
</script>

<style scoped>
  .project {
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    background-color: var(--light-green);
    font-size: 18px;
    width: 180px;
    height: 40px;
    cursor: pointer;
  }
</style>