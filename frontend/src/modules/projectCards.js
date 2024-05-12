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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getUserById = async (userId) => {
    try {
      const response = await fetch(`${baseURL}/api/user/${userId}`);
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
      if (data && data.length > 0) {
        const firstProject = data[0];
        project.value.title = firstProject.title;
        project.value.description = firstProject.description;
        project.value.startDate = formatDate(firstProject.startDate);
        project.value.endDate = formatDate(firstProject.endDate);
        project.value.status = firstProject.status;
        const authorName = await getUserById(firstProject.author);
        project.value.author = authorName || "Unknown";
        projectLoaded.value = true;
      }
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
