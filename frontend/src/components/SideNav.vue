<template>
  <nav class="sidenav">
    <img src="@/assets/logo.png" alt="Logo image" class="margin-b-50">
    <router-link to="/dashboard"><h3>Dashboard</h3></router-link>
    <div class="account-section">
      <img src="../assets/avatar.png" alt="Profile photo" class="avatar-img">
      <h5 class="margin-b-30 green">Account</h5>
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
      return { LogOUT };
    }
  }
</script>

<style scoped>
  .sidenav {
    text-align: center;
    width: 250px;
    padding: 30px 15px;
    background-color: #1e3932;
    color: black;
  }

  .sidenav > a {
    color: white;
  }

  .account-section {
    position: absolute;
    bottom: 30px;
  }

  .avatar-img {
    width: 70px;
    margin-bottom: 10px;
  }

  button{
    height: 30px;
    width: auto;
    font-size: 18px;
    background-color: #d4e9e2;
    color: #1e3932;
    padding: 5px 50px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #006241;
    transition: 0.5s;
    color: white;
  }

  .green {
    color: #d4e9e2;
  }

  .m-t-40{
    margin-top: 40px;
  }

</style>
