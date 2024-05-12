import { ref } from "vue"
import { useRouter } from 'vue-router'
import store from '../store/store';

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

    fetch(`${baseURL}/api/user/login`, requestOptions).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        // console.log("Response data:", data);
        const userId = data.data.userid;
        // console.log("User ID:", userId);
        store.commit('setUserId', userId);
        console.log("User ID stored in Vuex:", store.getters.getUserId);
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
