import { ref } from "vue";
import store from "../store/store";

const baseURL = `https://pwa-semester-project.onrender.com`;

//get all projects

const getAllProjects = () => {
    
    const project = ref({
        _id: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
        author: "",
        collaborators: ""
    });

    const projectLoaded = ref(false);
    const userId = store.getters.getUserId;
    const authToken = store.getters.getToken;
    const projects = ref([]);

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
                    projectLoaded.value = true;
                }
            } else {
                console.error("Invalid data format received from the server");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const addProject = () => {
        const userId = store.getters.getUserId; // Fetch userId here
    console.log("userId:", userId);
        const requestOption = {
            method: "Post",
            headers: {
                'auth-token': authToken
            },
            body: JSON.stringify({
                title: project.value.title,
                description: project.value.description,
                startDate: project.value.startDate,
                endDate: project.value.endDate,
                status: project.value.status,
                author: userId
                // collaborators: project.collaborators
            })
            
        }
        console.log(project.value); 
        fetch(`${baseURL}/api/project`, requestOption)
            .then(getProjectbyID())
    };



    return { project, projectLoaded, getProjectbyID, addProject };
};

export default getAllProjects;
