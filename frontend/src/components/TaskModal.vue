<template>
  <div class="taskmodal margin-b-30">
    <img src="../assets/close-icon.svg" alt="" class="close-icon">
    <h3 class="margin-b-8 textcenter">Task name</h3>
    <p class="margin-b-30 textcenter">Owner name</p>
    <p class="margin-b-15">LOrem ipsum</p>
    <p class="margin-b-15">Date</p>
    <p class="margin-b-8">Collaborators</p>
      <div class="collab-container">
        <div class="collaborators margin-b-8">
          <p>name</p>
          <p>email</p>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'TaskModal'
  }
</script>

<style scoped>
  .taskmodal {
    width: 750px;
    padding: 50px 50px;
    background-color: rgb(188, 188, 188);
    color: black;
  }

  .close-icon {
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
