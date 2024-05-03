import { ref } from "vue";
import { useRouter } from 'vue-router'

const baseURL = `https://pwa-semester-project.onrender.com`;

//Login

const login = () => {
  const input = ref({
    email: "",
    password: "",
  });

  const router = useRouter();


  const LogIN = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email: input.value.email,
        password: input.value.password,
      }),
    };

    fetch(`${baseURL}/api/user/login`, requestOptions).then((response) => {
      if (response.ok) {
        router.push({ path: '/dashboard'});
      } else {
        alert("401:Invalid email or password");
      }
    });
  };

  return {
    LogIN,
    input,
  };
};

export default login;
