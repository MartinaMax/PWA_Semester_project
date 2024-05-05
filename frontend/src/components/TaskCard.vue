<template>
  <article class="taskcard margin-b-15" @click='displayComponent'>
    <div>
      <h4 class="margin-b-15">Task name</h4>
      <div class="icon">
        <button><img src="../assets/pen-icon.svg" alt=""></button>
        <button><img src="../assets/bin-icon.svg" alt=""></button>
      </div>
    </div>
    <p class="margin-b-15">LOrem ipsum</p>
    <p class="margin-b-15">Date</p>
    <p class="taskcard-owner">Owner name</p>
  </article>
</template>
  
<script>
  
  export default {
    name: 'TaskCard'
  }
</script>
  
<style scoped>
  .taskcard {
    width: 300px;
    height: 250px;
    padding: 15px;
    background-color:var(--light-grey);
  }

  .taskcard > div {
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

  .taskcard-owner {
    color: var(--dark-green);
  }

</style>
  