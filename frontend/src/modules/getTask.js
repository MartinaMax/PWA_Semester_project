import { ref } from "vue"
import { useRouter } from 'vue-router'

const baseURL = `https://pwa-semester-project.onrender.com`;

const getTask = () => {

    const getTaskByProject = async () => {
        try {
            await fetch(`${baseURL}/project/task`)
            .then(res => res.json())
            .then(data => {

            })
        }
    }
}