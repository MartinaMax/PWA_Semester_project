<template>
  <nav class="sidenav">
    <img src="@/assets/logo.png" alt="Logo image" class="margin-b-50">
    <router-link to="/dashboard"><h3>Dashboard</h3></router-link>
    <div class="account-section">
      <div class="center">
        <img src="../assets/avatar.png" alt="Profile photo" class="avatar-img">
      </div>
      <h5 class="margin-b-30">Account</h5>
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
    padding: 50px 15px;
    background-color: var(--dark-green);
    color: white;
  }

  .sidenav > a {
    color: var(--lime-green);
  }

  .account-section {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    position: absolute;
    bottom: 50px;
    width: 191px;
  }

  .center {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-bottom: 15px;
  }
  
  .avatar-img {
    width: 100px;
  }

  button{
    height: 40px;
    width: auto;
    font-size: 18px;
    background-color: var(--light-green);
    color: black;
    border: none;
    cursor: pointer;
  }

  button:hover {
    font-weight: bold;
    transition: 0.5s;
  }


  .m-t-40{
    margin-top: 40px;
  }

</style>
