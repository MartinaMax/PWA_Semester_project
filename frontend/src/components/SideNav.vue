<template>
  <nav class="sidenav">
    <img src="" alt="Logo image" class="margin-b-50">
    <router-link to="/dashboard"><h3>Dashboard</h3></router-link>
    <div class="account-section">
      <img src="../assets/avatar.png" alt="Profile photo" class="avatar-img margin-b-15">
      <h3 class="margin-b-30">Account</h3>
      <button  @click="LogOUT()">Log out</button>
    </div>
  </nav>
</template>
  
<script>
import logout from "../modules/logout"
  export default {
    name: 'SideNav',

    setup() {
      const { LogOUT } = logout()
      return { LogOUT};
    }
  }
</script>

<style scoped>
  .sidenav {
    text-align: center;
    width: 250px;
    padding: 50px 30px;
    background-color: black;
    color: white;
  }

  .sidenav > a {
    color: white;
  }

  .account-section {
    position: absolute;
    bottom: 30px;
  }

  .avatar-img {
    width: 50px;
  }

  button{
    font-size: 18px;
    background-color: white;
    padding: 15px 50px;
    border: none;
  }

</style>
