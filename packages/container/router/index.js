import { createRouter, createWebHistory } from "vue-router";
import MarketingApp from "../components/MarketingApp.vue";
import App from '../components/App.vue';

const routes = [
  {
    path: "/",
    name: "App",
    component: App
  },
  {
    path: "/marketing",
    name: "Marketing",
    component: MarketingApp
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

// process.env.BASE_URL