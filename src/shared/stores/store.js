import Vue from "vue";
import Vuex from "vuex";
import { crudModule } from "./modules/crudModule";
import { searchModule } from "./modules/searchModule";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    crud: crudModule,
    search: searchModule,
  },
});
