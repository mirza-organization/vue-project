import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import '@fortawesome/fontawesome-free/css/all.css';
import LoginForm from './components/LoginForm.vue';
import RegisterForm from './components/RegisterForm.vue';
import JourneyRequest from './components/JourneyRequest.vue';
import JourneyForm from './components/JourneyForm.vue';
import DashboardView from './components/DashboardView.vue';

const routes = [
    { path: '/register',name:RegisterForm, component: RegisterForm },
    { path: '/login',name:LoginForm, component: LoginForm },
    { path: '/Journey-Request',name:JourneyRequest, component: JourneyRequest},
    { path: '/Journey-Form',name:JourneyForm, component: JourneyForm},
    { path: '/Dashboard-View',name:DashboardView, component: DashboardView}
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  const app = createApp(App)
  app.use(router)
  app.mount('#app')
