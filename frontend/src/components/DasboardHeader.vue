<template>
  <div>
    <h1 class="margin-b-50">Dashboard</h1>
    <div class="project margin-b-30">
      <h2>Projects</h2>
      <button @click='displayComponent'>New project</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DashboarIntroHeader',
  }
</script>

<style scoped>
  .project {
    display: flex;
    justify-content: space-between;
  }

  button {
    border: none;
    background-color: red;
    font-size: 18px;
    width: 180px;
    padding: 15px 0;
    cursor: pointer;
  }
</style>