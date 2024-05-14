import { ref } from "vue";
import store from "../store/store";

const baseURL = `https://pwa-semester-project.onrender.com`;

//Project CRUD operations

const getAllProjects = () => {
    const userId = store.getters.getUserId;

    const project = ref({
        _id: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
        author: userId,
        collaborators: ""
    });

    const projectLoaded = ref(false);
    const authToken = store.getters.getToken;
    const projects = ref([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${day}.${month}.${year}`;
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

    //get all projects by user id
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
                    const authorName = await getUserById(project.value.author) || "Unknown";
                    console.log(data);
                    
                    projects.value = data.map((project) => ({
                        _id: project._id,
                        title: project.title,
                        description: project.description,
                        startDate: formatDate(project.startDate),
                        endDate: formatDate(project.endDate),
                        status: project.status,
                        author: authorName,
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

    //post new projects
    const addProject = () => {
        console.log("userId:", userId);
    
        // Parse startDate and endDate strings into Date objects
        const startDate = project.value.startDate ? new Date(project.value.startDate) : null;
        const endDate = project.value.endDate ? new Date(project.value.endDate) : null;
    
        const requestOption = {
            method: "Post",
            headers: {
                'auth-token': authToken,
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({
                title: project.value.title,
                description: project.value.description,
                startDate: startDate ? startDate.toISOString() : null,
                endDate: endDate ? endDate.toISOString() : null,
                status: project.value.status,
                author: project.value.author
            }) 
        };
        console.log(project.value); 
        fetch(`${baseURL}/api/project`, requestOption)
            .then(getProjectbyID());
    };



    return { project, projects, projectLoaded, getProjectbyID, addProject };
};

export default getAllProjects;
