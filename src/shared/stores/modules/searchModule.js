import * as types from "../types";
import * as utils from "../../utils";
import axios from "axios";

export const searchModule = {
  state: {
    member: {
      name: "",
    },
    members: [],
  },
  mutations: {
    [types.SEARCH_READ](state, members) {
      state.members = members;
    },
  },
  actions: {
    [types.SEARCH_READ]({ commit }) {
      utils.nProgress.start();
      axios
        .get(
          `http://localhost:3100/api/v1/search?name=${searchModule.state.member.name}`
        )
        .then((response) => {
          console.log(response);
          commit(types.SEARCH_READ, response.data.members);
          utils.nProgress.done();
        })
        .catch((error) => {
          utils.apiCommonError(error);
        });
    },
  },
};
