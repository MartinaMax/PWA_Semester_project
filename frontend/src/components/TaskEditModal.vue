<template>
    <div class="taskeditmodal margin-b-30">
      <h3 class="margin-b-30 textcenter">Edit task</h3>
      <form action="">
        <div>
            <p class="margin-b-15">Task name</p>
            <input type="text">
        </div>
        
        <p class="margin-b-15">LOrem ipsum</p>
        <p class="margin-b-15">Date</p>
        <p class="margin-b-8">Collaborators</p>
          <div class="collab-container">
            <div class="collaborators margin-b-8">
              <p>name</p>
              <p>email</p>
            </div>
          </div>
      </form>
      
    </div>
  </template>
  
  <script>
    export default {
      name: 'TaskEditModal'
    }
  </script>
  
  <style scoped>
    .taskeditmodal {
      width: 750px;
      padding: 50px 50px;
      background-color: rgb(188, 188, 188);
      color: black;
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
  