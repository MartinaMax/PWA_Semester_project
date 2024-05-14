<template>
<div class="modal-background" v-if="isOpen" @click.self="closeModal()">
    <div  class="editmodal">
      <div class="close-button-container"><img @click="closeModal()" src="../assets/close-icon.svg" alt=""> </div>
      <h3 class="margin-b-30 textcenter">New project</h3>
      <!-- Form -->
      <form action="">
        <div class="flex">
          <p class="margin-b-15">Project title*</p>
          <input type="text" name="title" v-model="project.title" required>
        </div>
        <p class="margin-b-8">Description*</p>
        <textarea class="margin-b-15" v-model="project.description">LOrem ipsum</textarea>
        <div class="flex margin-b-15">
          <p>Start date*</p>
          <input type="date" name="startDate" v-model="project.startDate" required>
        </div>
        <div class="flex margin-b-15">
          <p>End date*</p>
          <input type="date" name="endDate" v-model="project.endDate" required>
        </div>
        <!-- Status dropdown -->
        <div class="flex margin-b-15">
          <p>Status*</p>
          <div class="dropdown-container">
            <input type="text" placeholder="Choose status" @click="toggleDropdown" v-model="selectedOption" readonly>
            <ul v-if="isDropdownOpen">
              <li v-for="(option, index) in dropdownOptions" :key="index" @click="selectOption(option)">
              {{ option }}
              </li>
            </ul>
          </div>
        </div>
        <div>
        <!-- Collaborators checkbox -->
          <p class="margin-b-8">Collaborators</p>
          <!-- <div class="collaborators">
            <div v-for="(collaborator, index) in collaborators" :key="index">
              <input type="checkbox" :id="'collaborator_' + collaborator.id" :value="collaborator.id" v-model="project.collaborators">
              <label :for="'collaborator_' + collaborator.id">{{ collaborator.name }}</label><br>
            </div>
          </div> -->
        </div>
      </form>
      <!-- Edit button -->
      <div class="edit-button-container">
        <button class="edit-button" type="submit" @click="addProject(project); closeModal()">Create</button>
      </div>
    </div>
  </div>  
</template>
  
<script>
 import { defineComponent } from 'vue';
 import getAllProjects from '../modules/project.js';

  export default defineComponent({
  name: 'NewProjectModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit('close');
    };

    const { project, addProject } = getAllProjects();

    return {
      closeModal,
      project, 
      addProject
    };
    
  },
  data() {
    return {
      isDropdownOpen: false,
      dropdownOptions: ['To do', 'In progress', 'Done']
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isDropdownOpen = false; 
      this.project.status = option; 
    }
  }
});
 
</script>
  
<style scoped>
  .modal-background {
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%; 
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.850);
    justify-content: center;
    padding: 50px 0;
  }
  
    .editmodal {
      width: 750px;
      padding: 50px 50px;
      background-color: var(--light-grey);
    }
  
    .textcenter {
      text-align: center;
    }

    input, textarea {
      border: none;
    }

    input {
      height: 30px;
      margin-left: 15px;
    }

    textarea {
      width: 650px;
      height: 100px;
    }

    .flex {
      display: flex;
    }

    .dropdown-container {
      position: relative;
    }

    .dropdown-container > input {
      position: relative;
      cursor: pointer;
      padding-left: 8px;
    }
    
    .dropdown-container > ul {
      text-align: center;
      position: absolute;
      top: 100%;
      right: 0;
      list-style-type: none;
      background-color: #fff;
    }
    
    .dropdown-container > ul > li {
      padding: 8px 50px;
      cursor: pointer;
    }
    
    .dropdown-container > ul > li:hover {
      background-color: #f0f0f0;
    }

    .close-button-container {
      display: flex;
      justify-content: end;
      cursor: pointer;
    }

    .edit-button-container {
        display: flex;
        justify-content: center;
      }

    .edit-button {
        border: none;
        background-color: var(--light-green);
        font-size: 18px;
        width: 180px;
        height: 40px;
        cursor: pointer;
    }
</style>