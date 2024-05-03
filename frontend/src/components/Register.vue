<template>
  <h3 class="margin-b-30 title">Sign up</h3>
  <div class="form">
    <input class="form-input" type="name" placeholder="Full name" name="name" v-model="input.name" required>
    <input class="form-input" type="email" placeholder="Email" name="email" v-model="input.email" required>
    <input class="form-input margin-b-15" type="text" placeholder="Password" name="password" v-model="input.password"
      required>
    <button @click="Register()" class="margin-b-15 button-login" type="submit">Sign up</button>
  </div>
</template>

<script>

import register from "../modules/register"

export default {
  name: 'RegisterUser',

  setup() {
    const { input, Register } = register();
    return {input, Register };
  }
}
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
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