import { ref, onMounted } from "vue";
import store from "../store/store";

const baseURL = `https://pwa-semester-project.onrender.com`;

//get all projects

const getAllProjects = () => {
  const modalOpen = ref(false);
  const project = ref({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    author: "",
  });

  const projectLoaded = ref(false);
  const userId = store.getters.getUserId;
  const projects = ref([]);
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getUserById = async (userId) => {
    try {
      const response = await fetch(`${baseURL}/api/users/` + userId);
      const userData = await response.json();
      return userData.name;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getProjectbyID = async () => {
    try {
      const response = await fetch(`${baseURL}/api/project/` + userId);
      const data = await response.json();
      projects.value = Array.isArray(data)
      ? data.map((project) => ({
          title: project.title,
          description: project.description,
          startDate: formatDate(project.startDate),
          endDate: formatDate(project.endDate),
          status: project.status,
          author: getUserById(project.author) || "Unknown"
        }))
      : [];
      projectLoaded.value = true;
    } catch (error) {
      console.error(error);
    }
  };

  onMounted(() => {
    getProjectbyID();
  });

  const openModal = () => {
    modalOpen.value = true;
  };

  return { project, modalOpen, openModal, projectLoaded };
};

export default getAllProjects;
