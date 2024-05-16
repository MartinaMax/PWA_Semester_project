import { ref } from "vue";
import { useRouter } from "vue-router";
import store from "../store/store";

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

    fetch(`${baseURL}/api/user/login`, requestOptions).then(
      async (response) => {
        if (response.ok) {
          const data = await response.json();
          const userId = data.data.userid;
          const authToken = data.data.token;
          store.commit("setUserId", userId);
          store.commit("setToken", authToken);

          localStorage.setItem("userId", userId);
          localStorage.setItem("authToken", authToken);
          router.push({ path: "/dashboard" });
        } else {
          alert("401:Invalid email or password");
        }
      }
    );
  };

  return {
    LogIN,
    input,
  };
};

export default login;
