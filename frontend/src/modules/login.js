// const emailLogIn = document.querySelector("#emailLogIn");
// const passwordLogIn = document.querySelector("#passwordLogIn");
import { ref } from "vue";

const baseURL = `https://pwa-semester-project.onrender.com`;

//Login

const input = ref({
  email: "",
  password: "",
});

const LogIN = () => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email: input.value.email,
      password: input.value.password
    })
  }

  fetch(`${baseURL}/api/user/login`, requestOptions).then((response) => {
    if (response.ok) {
      window.location.replace("DashboardView.vue");
    } else {
      alert("401:Invalid email or password");
    }
  });
};

export default LogIN;
