<template>

  <div>
    <TaskModal :is-open="modalOpen" @close="modalOpen = false"/>
    <TaskEditModal :is-modal-open="editmodalOpen" @close="editmodalOpen = false"/>
  <article class="taskcard margin-b-15" @click="openModal()">
    <div class="spacebetween">
      <h4 class="margin-b-15">Task name</h4>
      <div class="icon">
        <button @click.stop="openEditModal()"><img src="../assets/pen-icon.svg" alt=""></button>
        <button><img src="../assets/bin-icon.svg" alt=""></button>
      </div>
    </div>
    <p class="margin-b-15">LOrem ipsum</p>
    <p class="margin-b-15">Date</p>
    <div class="taskcard-owner"><p>Owner name</p></div>
  </article>
   
</div>
</template>
  
<script>
  import TaskModal from '../components/TaskModal.vue'
import TaskEditModal from '../components/TaskEditModal'

export default {
  name: 'TaskCard',
  components: {
    TaskModal,
    TaskEditModal
  },
  data() {
    return {
      modalOpen: false,
      editmodalOpen: false 
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    },
    openEditModal() {
      this.editmodalOpen = true;
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
    cursor: pointer;
  }

  .spacebetween {
    display: flex;
    justify-content: space-between;
  }

  .icon {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
  }

  .icon > button {
    cursor: pointer;
  }
  
  button {
    background: none;
    border: none;
    height: fit-content;
  }

  .taskcard-owner {
    display: flex;
    justify-content: end;
    color: var(--dark-green);
  }
</style>
  