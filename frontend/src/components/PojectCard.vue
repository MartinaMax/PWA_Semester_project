<template>
    <article class="projectcard margin-b-30">
      <div>
        <router-link to="/project"><h3 class="margin-b-15" >{{  project.title }}</h3></router-link>
        <div class="icon">
          <button @click="openModal()"><img src="../assets/pen-icon.svg" alt=""></button>
          <ProjectEditModal  :is-open="modalOpen" @close="modalOpen = false"/>
          <button><img src="../assets/bin-icon.svg" alt=""></button>
        </div>
      </div>
    <router-link to="/project">
      <p class="margin-b-15">{{  project.description }}</p>
      <p class="margin-b-15">{{  project.startDate }}</p>
      <p class="margin-b-15">{{  project.endDate }}</p>
      <div class="flex">
        <p>{{  project.status }}</p>
        <p class="project-owner">{{  project.author }}</p>
      </div>
      </router-link>
    </article>
</template>

<script>
import { ref, onMounted } from 'vue';
import ProjectEditModal from '../components/ProjectEditModal.vue';
import store from '../store/store';
// import { useStore } from 'vuex';

const baseURL = `https://pwa-semester-project.onrender.com`;

export default {
  name: 'ProjectCard',
  components: {
    ProjectEditModal
  },
  setup() {

    const modalOpen = ref(false);
    const project = ref({
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      status: '',
      author: ''
    });

    const getProjectbyID = async () => {
      try {
        const userId = store.getters.getUserId;
        console.log("User ID:", userId);
        const response = await fetch(`${baseURL}/api/project/` + userId);
        
        const data = await response.json();
        project.value.title = data.title;
    project.value.description = data.description;
    project.value.startDate = data.startDate;
    project.value.endDate = data.endDate;
    project.value.status = data.status;
    project.value.author = data.author;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
        getProjectbyID();
    });

    const openModal = () => {
      modalOpen.value = true;
    };

    return { project, modalOpen, openModal };
  }
};
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
