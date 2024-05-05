<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
    rel="stylesheet">
  <router-view />
</template>

<style lang="scss">
:root {
  --dark-green: #1E3932;
  --forest-green: #006241;
  --light-green: #DFF9BA;
  --lime-green: #C5FF73;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232323;
  overflow: auto;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
p {
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4 {
  font-family: "Barlow Condensed", sans-serif;
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

.margin-b-8 {
  margin-bottom: 8px;
}

.margin-b-15 {
  margin-bottom: 15px;
}

.margin-b-30 {
  margin-bottom: 30px;
}

.margin-b-50 {
  margin-bottom: 50px;
}
</style>
