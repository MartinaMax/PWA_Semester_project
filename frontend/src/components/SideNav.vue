<template>
    <article class="sidenav">
      <img src="" alt="Logo image">
      <h3>Dashboard</h3>
      <div>
        <img src="" alt="Profile photo" class="margin-b-15">
        <h3 class="margin-b-30">Account</h3>
        <a href=""><p>Log out</p></a>
      </div>
    </article>
</template>
  
<script>
  export default {
    name: 'SideNav',
  }
</script>

<style scoped lang="scss">
    .sidenav {
        width: 250px;
        padding: 50px 30px;
        background-color: black;
        color: azure;
    }
</style>
