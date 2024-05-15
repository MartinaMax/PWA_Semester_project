<template>
  <div>
    <div class="taskstatus margin-b-15">
      <h3>To do</h3>
      <h3>In progress</h3>
      <h3>Done</h3>
    </div>
    <div class="task-container">
      <div class="task-scroll-container" ref="toDo">
        <TaskCard :tasks="toDoTasks" status="To do" />
      </div>
      <div class="gapline"></div>
      <div class="task-scroll-container" ref="inProgress">
        <TaskCard :tasks="inProgressTasks" status="In progress" />
      </div>
      <div class="gapline"></div>
      <div class="task-scroll-container" ref="done">
        <TaskCard :tasks="doneTasks" status="Done" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue'
import getAllTasks from "../modules/task.js"
import { onMounted, ref } from "vue"

export default {
  name: 'TaskContainer',
  components: {
    TaskCard
  },
  setup() {
    const { taskLoaded, tasks, getTaskByProject } = getAllTasks();
    const toDoTasks = ref([]);
    const inProgressTasks = ref([]);
    const doneTasks = ref([]);

    onMounted(() => {
      getTaskByProject();
      if (tasks && tasks.value) {
        tasks.value.forEach(task => {
          if (task.status === "To do") {
            toDoTasks.value.push(task);
          } else if (task.status === "In progress") {
            inProgressTasks.value.push(task);
          } else if (task.status === "Done") {
            doneTasks.value.push(task);
          } else {
            const a = "potato"
            console.log(a)
          }
        });
      }
    });

    return { taskLoaded, toDoTasks, inProgressTasks, doneTasks }
  }
}
</script>

<style scoped lang="scss">
.taskstatus {
  display: flex;
  justify-content: space-around;

}

.task-container {
  display: grid;
  grid-template-columns: 7fr 1fr 7fr 1fr 7fr;
  column-gap: 20px;
}

.task-scroll-container {
  width: 100%;
  overflow-y: auto;
  height: 45%;
}

.task-scroll-container::-webkit-scrollbar {
  width: thin;
  background: transparent;
}

.gapline {
  width: 5px;
  background-color: black;
  position: relative;
  left: 10px
}
</style>