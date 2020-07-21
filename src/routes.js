import CRUD from "./components/container/contents/CRUD.vue";
import Search from "./components/container/contents/Search.vue";

export const routes = [
  { path: "/", redirect: "/CRUD" },
  { path: "/CRUD", name: "CRUD", component: CRUD },
  { path: "/search", name: "search", component: Search },
];
