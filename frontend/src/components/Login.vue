<template>
  <h3 class="margin-b-30 title">Log in</h3>
  <div class="form">
    <input class="form-input" type="email" placeholder="Email" name="email" required ref="emailLogIn" />
    <input class="form-input margin-b-15" type="text" placeholder="Password" name="password" ref="passwordLogIn"
      required />
    <button @click="LogIN()" class="margin-b-15 button-login" type="submit">Log in</button>
  </div>
</template>

<script>
import LogIN from '../modules/login'

export default {
  name: "LogIn",

  setup() {
    return { LogIN };
  },
}

</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  width: 400px;
}

.form-input {
  height: 40px;
  margin-bottom: 15px;
  text-align: center;
  border: none;
  background-color: white;
}

.button-login {
  margin: 15px auto 30px auto;
  width: 400px;
  height: 40px;
  text-align: center;
  color: black;
  background-color: white;
  border: none;
}

.title {
  color: black;
}
</style>
