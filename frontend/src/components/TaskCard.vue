<template>
  <article class="taskcard margin-b-15" @click="openModal()">
    <TaskModal :is-open="modalOpen" @close="modalOpen = false"/>
    <div>
      <h4 class="margin-b-15">Task name</h4>
      <div class="icon">
        <button><img src="../assets/pen-icon.svg" alt=""></button>
        <!-- <TaskEditModal :is-open="modalOpen" @close="modalOpen = false"/> -->
        <button><img src="../assets/bin-icon.svg" alt=""></button>
      </div>
    </div>
    <p class="margin-b-15">LOrem ipsum</p>
    <p class="margin-b-15">Date</p>
    <p class="taskcard-owner">Owner name</p>
  </article>
</template>
  
<script>
  import TaskModal from '../components/TaskModal.vue'
  // import TaskEditModal from '../components/TaskEditModal'
  
  export default {
    name: 'TaskCard',
    components: {
      TaskModal,
      //TaskEditModal
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
  .taskcard {
    width: 300px;
    height: 250px;
    padding: 15px;
    background-color:var(--light-grey);
  }

  .taskcard > div {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }
  
  button {
    background: none;
    border: none;
    height: fit-content;
  }

  .taskcard-owner {
    color: var(--dark-green);
  }

</style>
  