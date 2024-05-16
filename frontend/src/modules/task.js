import { ref } from "vue";
import store from "../store/store";

const baseURL = `https://pwa-semester-project.onrender.com`;

//Project CRUD operations
const getAllTasks = () => {
  const userId = store.getters.getUserId;
  const projectId = store.getters.getProjectId;
  const authToken = store.getters.getToken;
  const tasks = ref([]);
  const collab = ref([]);
  const taskLoaded = ref(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}.${month}.${year}`;
  };

  const task = ref({
    _id: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    state: "",
    author: userId,
    collaborators: [],
    project: projectId,
  });

  const getUserById = async () => {
    try {
      const response = await fetch(`${baseURL}/api/users/` + userId, {
        headers: {
          "auth-token": authToken,
        },
      });
      const userData = await response.json();
      return userData.name;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const getUsers = async () => {
    try {
      const response = await fetch(`${baseURL}/api/users/`, {
        headers: {
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      collab.value = data;
      console.log("Collaborators:", collab.value);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  //get tasks based on project id
  const getTaskByProject = async () => {
    try {
      const response = await fetch(`${baseURL}/api/task/${projectId}`, {
        headers: {
          "auth-token": authToken,
        },
      });
      const data = await response.json();
      if (Array.isArray(data)) {
        if (data.length === 0) {
          // User has zero tasks
          tasks.value = [];
          taskLoaded.value = true;
        } else {
          // User has multiple tasks
          const authorName =
            (await getUserById(task.value.author)) || "Unknown";

          tasks.value.splice(
            0,
            tasks.value.length,
            ...data.map((task) => ({
              _id: task._id,
              title: task.title,
              description: task.description,
              startDate: formatDate(task.startDate),
              endDate: formatDate(task.endDate),
              state: task.state,
              author: authorName,
            }))
          );
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

  //post new task
  const addTask = () => {
    // Parse startDate and endDate strings into Date objects
    const startDate = task.value.startDate
      ? new Date(task.value.startDate)
      : null;
    const endDate = task.value.endDate ? new Date(task.value.endDate) : null;

    const requestOption = {
      method: "Post",
      headers: {
        "auth-token": authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: task.value.title,
        description: task.value.description,
        startDate: startDate ? startDate.toISOString() : null,
        endDate: endDate ? endDate.toISOString() : null,
        state: task.value.state,
        author: task.value.author,
        collaborators: task.value.collaborators,
        project: task.value.project,
      }),
    };
    fetch(`${baseURL}/api/task`, requestOption)
      .then((response) => {
        if (!response.ok) {
          window.alert("Failed to add new task. Please try again.");
        } else {
          window.alert("New task added successfully!");
        }
        return response.json();
      })
      .then(() => {
        getTaskByProject();
      })
      .catch((error) => {
        console.error("Error adding task:", error);
        window.alert("Failed to add new task. Please try again.");
      });
  };

  return { getTaskByProject, tasks, collab, getUsers, addTask, task };
};

export default getAllTasks;
