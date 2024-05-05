<template>
    <div>
       <!-- Breadcrumbs -->
      <h1 class="margin-b-15">Project name</h1>
      <div class="task margin-b-50">
        <p class="project-collab">Collaborators</p>
        <button @click='displayComponent'>New task</button>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'ProjectHeader',
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
    background-color: red;
    font-size: 18px;
    width: 180px;
    height: 40px;
    cursor: pointer;
  }
</style>