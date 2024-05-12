import { ref, onMounted } from "vue";
import store from "../store/store";

const baseURL = `https://pwa-semester-project.onrender.com`;

//get all projects

const getAllProjects = () => {
  const modalOpen = ref(false);
  const project = ref({
    _id: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    author: "",
  });

  const projectLoaded = ref(false);
  const userId = store.getters.getUserId;
  const authToken = store.getters.getToken;
  const projects = ref(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const getUserById = async () => {
    try {
      const response = await fetch(`${baseURL}/api/users/` + userId, {
        headers: {
            'auth-token': authToken 
        }
    });
      const userData = await response.json();
      return userData.name;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getProjectbyID = async () => {
    try {
      const response = await fetch(`${baseURL}/api/project/` + userId, {
        headers: {
            'auth-token': authToken 
        }
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        if (data.length === 0) {
          // User has zero projects
          projects.value = [];
          projectLoaded.value = true; 
        } else if (data.length === 1) {
          // User has one project
          const projectData = data[0]; // Assuming the first project in the array
          project.value = {
            _id: projectData._id,
            title: projectData.title,
            description: projectData.description,
            startDate: formatDate(projectData.startDate),
            endDate: formatDate(projectData.endDate),
            status: projectData.status,
            author: getUserById(projectData.author) || "Unknown"
          };
          projectLoaded.value = true; // Set projectLoaded to true when there's one project
        } else {
          // User has multiple projects
          console.log(data);
          projects.value = data.map((project) => ({
            _id: project._id,
            title: project.title,
            description: project.description,
            startDate: formatDate(project.startDate),
            endDate: formatDate(project.endDate),
            status: project.status,
            author: getUserById(project.author) || "Unknown"
          }));
          projectLoaded.value = true; // Set projectLoaded to true when there are multiple projects
        }
      } else {
        console.error("Invalid data format received from the server");
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
