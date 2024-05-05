<template>
    <article class="projectcard margin-b-30" >
      <div>
        <router-link to="/project"><h3 class="margin-b-15">Project name</h3></router-link>
        <div class="icon">
          <button><img src="../assets/pen-icon.svg" alt=""></button>
          <button><img src="../assets/bin-icon.svg" alt=""></button>
        </div>
      </div>
    <router-link to="/project">
      <p class="margin-b-15">LOrem ipsum</p>
      <p class="margin-b-15">Date</p>
      <div class="flex">
        <p>Status</p>
        <p class="project-owner">Owner name</p>
      </div>
      </router-link>
    </article>
</template>

<script>
  export default {
    name: 'ProjectCard'
  }
</script>

<style scoped>
  .projectcard {
    padding: 30px 50px;
    background-color: var(--light-grey);
  }

  .projectcard > div {
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

  a {
    color: black;
  }

  .flex{
    display: flex;
    justify-content: space-between;
  }

  .project-owner {
    color: var(--dark-green);
  }
</style>
