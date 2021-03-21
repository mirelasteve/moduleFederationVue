import  { createRouter, createMemoryHistory } from "vue-router";
import MarketingApp from "../components/MarketingHeader.vue";
import App from '../components/App.vue';
import Sales from '../components/Sales.vue'
// console.log(createMemoryHistory);
const history = createMemoryHistory();

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
  },
  { 
    path:'/sales',
    name:"Sales",
    component:Sales
}
];

const router = createRouter({
  history,
  routes
});

export default router;

// process.env.BASE_URL