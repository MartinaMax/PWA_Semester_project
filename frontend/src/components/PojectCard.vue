<template>
    <article class="projectcard margin-b-30" >
      <div>
        <router-link to="/project"><h3 class="margin-b-15">Project name</h3></router-link>
        <div class="icon">
          <button @click="openModal()"><img src="../assets/pen-icon.svg" alt=""></button>
          <ProjectEditModal  :is-open="modalOpen" @close="modalOpen = false"/>
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
import ProjectEditModal from '../components/ProjectEditModal.vue'

  export default {
    name: 'ProjectCard',
    components: {
      ProjectEditModal
    },
    data() {
    return {
      modalOpen: false
    };
  },
  methods: {
    openModal() {
      this.modalOpen = true;
    }
  }
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



  .taskmodal-background {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.850);
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }

  .taskmodal {
    width: 750px;
    padding: 50px 50px;
    background-color: var(--light-grey);
  }

  .textcenter {
    text-align: center;
  }

  .collab-container{
    overflow-y: auto;
    height: 180px;
    background-color: rgb(133, 133, 133);
    padding: 15px 30px;
  }

  .collaborators {
    display: flex;
    justify-content: space-around;
  }
</style>
