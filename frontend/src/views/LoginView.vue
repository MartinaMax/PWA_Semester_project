<template>
  <body>
    <article class="logincard">
      <img src="@/assets/avatar.png" alt="Avatar" class="avatar margin-b-15">
      <component :is="activeComp"></component>
      <p class="margin-b-15 text-black">Don't have an account? <button @click="toggleValue = !toggleValue" class="link">Sign up</button></p>
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
      if (this.toggleValue) {
        return 'comp-one'
      }
      else {
        return 'comp-two'
      }
    }
  }
}
</script>

<style scoped lang="scss">
body {
  margin: 0;
  padding: 60px 50px;
  background-image: url("../assets/Background.png");
  background-position: center;
  background-repeat: repeat;
  background-size: fill;
  opacity: .5;
}

.logincard {
  margin: auto;
  padding: 60px 50px;
  width: 500px;
  height: fit-content;
  background-color: #e6e6e6;
  color: white;
}


.avatar {
  margin: auto;
  margin: 15px 30px;
  width: 150px;
}

.link {
  border: none;
  background-color: #D9D9D9;
  font-weight: bold;
  color: #40bd9b;
  cursor: pointer;
}

.text-black {
  color: black;
}
</style>