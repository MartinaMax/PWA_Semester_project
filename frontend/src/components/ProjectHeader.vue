<template>
    <div>
       <!-- Breadcrumbs -->
      <h1 class="margin-b-15">Project name</h1>
      <div class="task margin-b-50">
        <p class="project-collab">Collaborators</p>
       <button @click="openModal()">New task</button>
      <NewTaskModal  :is-open="modalOpen" @close="modalOpen = false"/>
      </div>
    </div>
</template>

<script>
  import NewTaskModal from '../components/NewTaskModal.vue'

  export default {
    name: 'ProjectHeader',
    components: {
    NewTaskModal
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
  .task{
    display: flex;
    justify-content: space-between;
  }

  .task > p {
    align-self: center;
  }

  .project-collab {
    color: grey;
  }

  button{
    border: none;
    background-color: var(--light-green);
    font-size: 18px;
    width: 180px;
    height: 40px;
    cursor: pointer;
  }
</style>