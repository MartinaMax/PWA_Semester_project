<template>
  <router-view/>
</template>

<style lang="scss">
* { 
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1, h2, h3, h4, p {
  padding: 0;
  margin: 0
}

h1 {
  font-size: 50px;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 30px;
}

h4 {
  font-size: 20px;
}

p {
  font-size: 18px;
}

.margin-b-15 {
  margin-bottom: 15px;
}

.margin-b-30 {
  margin-bottom: 30px;
}
</style>
