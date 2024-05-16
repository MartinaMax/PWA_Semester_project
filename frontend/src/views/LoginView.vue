<template>
  <body>
    <article class="logincard">
      <div class="center">
        <img src="@/assets/avatar.png" alt="Avatar" class="avatar margin-b-15">
      </div>
      <component :is="activeComp"></component>
      <p class="margin-b-15 text-white">{{ Text }}
        <button @click="toggleValue = !toggleValue" class="link"> {{ buttonText }}</button>
      </p>
    </article>
  </body>
</template>

<script>
  export default {
    data() {
      return {
        toggleValue: true
      }
    },
    computed: {
      activeComp() {
        return this.toggleValue ? 'comp-one' : 'comp-two';
      },
      Text() {
        return this.toggleValue ? "Don't have an account? " : "Already have an account? "
      },
      buttonText() {
        return this.toggleValue ? "Sign up" : "Log in"
      }
    }
  }

</script>

<style scoped lang="scss">
  body {
    margin: 0;
    padding: 45px 30px;
    background-image: url("../assets/Background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: auto;
  }

  .logincard {
    margin: auto;
    padding: 60px 50px;
    width: 500px;
    height: 650px;
    background-color: var(--dark-green);
    color: white;
  }

  .center {
    display: flex;
    justify-content: center;
    padding: 0;
    margin-bottom: 15px;
  }

  .avatar {
    width: 150px;
  }

  .link {
    border: none;
    background-color: var(--dark-green);
    font-weight: bold;
    color: var(--lime-green);
    cursor: pointer;
  }

  .text-white {
    color: white;
    text-align: center;
  }
</style>