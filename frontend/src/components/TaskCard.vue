<template>
  <div v-if="taskLoaded">
    <TaskModal :is-open="modalOpen" @close="modalOpen = false" />
    <TaskEditModal :is-modal-open="editmodalOpen" @close="editmodalOpen = false" />
    <div>
      <article v-for="task in filteredTasks" :key="task._id" class="taskcard margin-b-15" @click="openModal()">
        <div class="spacebetween">
          <h4 class="margin-b-15">{{ task.title }}</h4>
          <div class="icon">
            <button @click.stop="openEditModal()"><img src="../assets/pen-icon.svg" alt=""></button>
            <button><img src="../assets/bin-icon.svg" alt=""></button>
          </div>
        </div>
        <p class="margin-b-15">{{ task.description }}</p>
        <p class="margin-b-15">{{ task.startDate }}</p>
        <p class="margin-b-15">{{ task.endDate }}</p>
        <div class="taskcard-owner">
          <p>{{ task.author }}</p>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import TaskModal from '../components/TaskModal.vue'
import TaskEditModal from '../components/TaskEditModal.vue'
import { ref, watch } from "vue"
import getAllTasks from '@/modules/task'

export default {
  name: 'TaskCard',
  components: {
    TaskModal,
    TaskEditModal
  },
  props: {
    tasks: Array,
    state: String
  },
  setup(props) {
    const taskLoaded = ref(true);
    const filteredTasks = ref([]);
    const { task } = getAllTasks()
    const modalOpen = ref(false);
    const editmodalOpen = ref(false);

    const openModal = () => {
      modalOpen.value = true;
    };

    const openEditModal = () => {
      editmodalOpen.value = true;
    };

    watch(() => props.tasks, (newTasks) => {
      console.log('All tasks:', newTasks);
      console.log('Filtered tasks:', newTasks.filter(task => task.state === props.state));
      filteredTasks.value = newTasks.filter(task => task.state === props.state);
      taskLoaded.value = true; 
    });

    return { taskLoaded, task, filteredTasks, modalOpen, editmodalOpen, openModal, openEditModal }
  }
}

</script>

<style scoped>
.taskcard {
  width: 300px;
  height: 250px;
  padding: 15px;
  background-color: var(--light-grey);
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

.icon>button {
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