import { ref } from "vue";
import { useRouter } from "vue-router";

const baseURL = `https://pwa-semester-project.onrender.com`;

//Register

const register = () => {
  const input = ref({
    name: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const Register = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: input.value.name,
        email: input.value.email,
        password: input.value.password,
      }),
    };

    fetch(`${baseURL}/api/user/register`, requestOptions).then((response) => {
      if (response.ok) {
        alert("Registered successfully!");
        router.push({ path: "/login" });
      } else {
        alert("401:Invalid email or password");
      }
    });
  };

  return {
    Register,
    input,
  };
};

export default register;