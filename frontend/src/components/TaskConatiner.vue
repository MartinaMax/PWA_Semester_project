<template>
  <div>
    <div class="taskstatus margin-b-15">
      <h3>To do</h3>
      <h3>In progress</h3>
      <h3>Done</h3>
    </div>
    <div class="task-container">
      <div class="task-scroll-container">
        <TaskCard :tasks="toDo" />
      </div>
      <div class="gapline"></div>
      <div class="task-scroll-container">
        <TaskCard :tasks="inProgress" />
      </div>
      <div class="gapline"></div>
      <div class="task-scroll-container">
        <TaskCard :tasks="done" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue'
import getAllTasks from "../modules/task.js"
import { ref, computed } from "vue"

export default {
  name: 'TaskContainer',
  components: {
    TaskCard
  },
  setup() {
    const { getTaskByProject, tasks } = getAllTasks();
    const toDoTasks = ref([]);
    const inProgressTasks = ref([]);
    const doneTasks = ref([]);

    async function filter() {
      await getTaskByProject();
      console.log("Tasks fetched:", tasks.value)
      const test = tasks.value
      if (tasks.value && tasks.value.length > 0) {
        test.forEach(task => {
          if (task.state === "To do") {
            toDoTasks.value.push(task);
          } else if (task.state === "In progress") {
            inProgressTasks.value.push(task);
          } else if (task.state === "Done") {
            doneTasks.value.push(task);
          } else {
            const a = "potato"
            console.log(a)
          }
        });
        console.log(done, inProgress, toDo);
      }
    }

    const toDo = computed(() => {
      return toDoTasks.value;
    });
    const inProgress = computed(() => {
      return inProgressTasks.value;
    });
    const done = computed(() => {
      return doneTasks.value;
    });

    filter()

    return { toDo, inProgress, done }
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