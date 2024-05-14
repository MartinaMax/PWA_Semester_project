<template>

  <div>
    <TaskModal :is-open="modalOpen" @close="modalOpen = false" />
    <TaskEditModal :is-modal-open="editmodalOpen" @close="editmodalOpen = false" />
    <div v-if="taskLoaded">
      <article v-for="task in tasks" :key="task._id" class="taskcard margin-b-15" @click="openModal()">
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
import TaskEditModal from '../components/TaskEditModal'
import getAllTasks from "../modules/task.js"
import { onMounted } from "vue"

export default {
  name: 'TaskCard',
  components: {
    TaskModal,
    TaskEditModal
  },
  setup() {
    const {  taskLoaded, getTaskByProjectAndState } = getAllTasks();

    onMounted(() => {
      getTaskByProjectAndState();
    });

    return { taskLoaded,getTaskByProjectAndState }

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