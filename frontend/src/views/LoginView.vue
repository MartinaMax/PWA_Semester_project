<template>
  <body>
    <article class="logincard">
      <div class="center">
        <img src="@/assets/avatar.png" alt="Avatar" class="avatar margin-b-15">
      </div>
      <component :is="activeComp"></component>
      <!-- <p class="margin-b-15 text-black">Don't have an account? <button @click="toggleValue = !toggleValue" class="link">Sign up</button></p> -->
      <p class="margin-b-15 text-black">{{ Text }}
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
  background-color: #f5f5f7;
  color: white;
}

.center {
  display: flex;
  justify-content: center;
}

.avatar {
  justify-self: center;
  margin: 15px 30px;
  width: 150px;
}

.link {
  border: none;
  background-color: #f5f5f7;
  font-weight: bold;
  color: #006241;
  cursor: pointer;
}

.text-black {
  color: black;
  text-align: center;
}
</style>