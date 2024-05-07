<template>
<div class="modal-background" v-if="isOpen" @click.self="closeModal()">
  <div class="taskmodal">
    <div class="close-button-container"><img @click="closeModal()" src="../assets/close-icon.svg" alt="" ></div>
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
</div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'TaskModal',
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

    return {
      closeModal
    };
  }
  });
</script>

<style scoped>
.modal-background {
  display: flex;
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%; 
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.850);
  justify-content: center;
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

  .close-button-container {
    display: flex;
    justify-content: end;
    cursor: pointer;
}
</style>
