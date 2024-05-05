<template>
    <div class="taskstatus margin-b-15">
      <h3>To do</h3>
      <h3>In progress</h3>
      <h3>Done</h3>
    </div>
    <div class="task-container">
        <div class="taskscrollcontainer">
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
            <TaskCard/>
        </div>
        <div class="gapline"></div>
        <div class="task-scroll-container">
          <TaskCard/>
        </div>
        <div class="gapline"></div>
        <div class="task-scroll-container">
        <TaskCard/>
        </div>
    </div>
  </template>
    
  <script>
    
    import TaskCard from '../components/TaskCard.vue'

    export default {
      name: 'TaskContainer',
      components: {
      TaskCard
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
      grid-template-columns: 7fr 1fr  7fr 1fr  7fr;
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
    