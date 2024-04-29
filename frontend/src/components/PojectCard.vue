<template>
  <article class="projectcard margin-b-30">
    <h3 class="margin-b-15">Project name</h3>
    <p class="margin-b-15">LOrem ipsum</p>
    <p class="margin-b-15">Date</p>
    <div>
      <p>Status</p>
      <p>Owner name</p>
    </div>
  </article>
</template>

<script>
  export default {
    name: 'ProjectCard',
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .projectcard {
    padding: 30px 50px;
    background-color: aqua;
  }

  div {
    display: flex;
    justify-content: space-between;
  }
</style>
