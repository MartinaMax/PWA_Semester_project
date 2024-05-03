import { useRouter } from 'vue-router';

const logout = () => {
  const router = useRouter();

  const deleteToken = () => {
    localStorage.removeItem("token");
  };

  const LogOUT = () => {
    deleteToken();

    router.push('/login');
  };

  return {
    LogOUT
  };
};

export default logout;