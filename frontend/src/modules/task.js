import { ref } from "vue";
import store from "../store/store";

const baseURL = `https://pwa-semester-project.onrender.com`;

//Project CRUD operations
const getAllTasks = () => {
    const userId = store.getters.getUserId;
    const project = store.getters.getProjectId;
    const authToken = store.getters.getToken;
    const tasks = ref([]);
    const taskLoaded = ref(false);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${day}.${month}.${year}`;
    };

    const task = {
        _id: "",
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        state: "",
        author: userId,
        collaborators: "",
        project: ""
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

    //get tasks based on project id
    const getTaskByProject = async () => {
        try {
            const response = await fetch(`${baseURL}/api/task/` + project, {
                headers: {
                    'auth-token': authToken
                }
            });
            const data = await response.json();
            if (Array.isArray(data)) {
                if (data.length === 0) {
                    // User has zero tasks
                    tasks.value = [];
                    taskLoaded.value = true;

                } else {
                    // User has multiple tasks
                    const authorName = await getUserById(task.author) || "Unknown";

                    tasks.value.splice(0, tasks.value.length, ...data.map((task) => ({
                        _id: task._id,
                        title: task.title,
                        description: task.description,
                        startDate: formatDate(task.startDate),
                        endDate: formatDate(task.endDate),
                        status: task.status,
                        author: authorName,
                    })));
                    console.log("Tasks fetched successfully:", tasks.value);
                    taskLoaded.value = true;
                }
            } else {
                console.error("Invalid data format received from the server");
            }
        } catch (error) {
            console.error(error);
        }
    };


    return { getTaskByProject };
}

export default getAllTasks;