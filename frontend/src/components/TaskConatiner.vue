<template>
  <div>
    <div class="taskstatus margin-b-15">
      <h3>To do</h3>
      <h3>In progress</h3>
      <h3>Done</h3>
    </div>
    <div class="task-container">
      <div class="task-scroll-container">
        <TaskCard :tasks="toDoTasks" state="To do" />
      </div>
      <div class="gapline"></div>
      <div class="task-scroll-container">
        <TaskCard :tasks="inProgressTasks" state="In progress" />
      </div>
      <div class="gapline"></div>
      <div class="task-scroll-container" >
        <TaskCard :tasks="doneTasks" state="Done" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskCard from '../components/TaskCard.vue'
import getAllTasks from "../modules/task.js"
import { ref } from "vue"

export default {
  name: 'TaskContainer',
  components: {
    TaskCard
  },
  setup() {
    const { tasks, getTaskByProject } = getAllTasks();
    const toDoTasks = ref([]);
    const inProgressTasks = ref([]);
    const doneTasks = ref([]);

    const categorizeTasks = () => {
      tasks.value.forEach(task => {
        if (task.state === "To do") {
          toDoTasks.value.push(task);
          console.log(toDoTasks);
        } else if (task.state === "In progress") {
          inProgressTasks.value.push(task);
          console.log(inProgressTasks);
        } else if (task.state === "Done") {
          doneTasks.value.push(task);
          console.log(doneTasks);
        } else {
          const a = "potato"
          console.log(a)
        }
      });
    
    };
    
      getTaskByProject();
      categorizeTasks(tasks);
 

    return { toDoTasks, inProgressTasks, doneTasks };
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