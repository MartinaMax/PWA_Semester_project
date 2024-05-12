import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

import LogIn from './components/Login.vue'
import RegisterUser from './components/Register.vue'

const app = createApp(App)
app.component('comp-one', LogIn)
app.component('comp-two', RegisterUser)
app.use(store)

app.use(router).mount('#app')
