import axios from "axios";
import * as types from "../types";
import * as utils from "../../utils";

export const crudModule = {
  state: {
    member: {
      name: "",
      age: "",
    },
    members: [],
  },
  mutations: {
    [types.CRUD_READ](state, members) {
      state.members = members;
    },
  },
  actions: {
    [types.CRUD_CREATE](commit, { spinnerTarget, fromComponent }) {
      // validation
      const member = crudModule.state.member;
      if (!member.name) {
        utils.toastr().warning("Please text your name.");
        return;
      }
      if (!Number(member.age) || Number(member.age) <= 0) {
        utils.toastr().warning("Please text your age and upper than 0.");
        return;
      }
      const spinner = utils.spinner().spin(spinnerTarget);
      axios
        .post("http://localhost:3100/api/v1/member", member)
        .then((response) => {
          console.log(response);
          spinner.stop();
          utils.toastr().success(response.data.result);
          fromComponent.$store.dispatch(types.CRUD_READ);
        })
        .catch((error) => {
          utils.apiCommonError(error, spinner);
        });
    },
    [types.CRUD_READ]({ commit }) {
      utils.nProgress.start();
      axios
        .get("http://localhost:3100/api/v1/member")
        .than((response) => {
          console.log(response);
          commit(types.CRUD_READ, response.data.members);
          utils.nProgress.done();
        })
        .catch((error) => {
          utils.apiCommonError(error);
        });
    },

    [types.CRUD_UPDATE](commit, { spinnerTarget, fromComponent, key }) {
      const member = crudModule.state.members[key];
      if (!member.name) {
        utils.toastr().warning("Please text your name.");
      }
      if (!Number(member.age) || Number(member.age) <= 0) {
        utils.toastr().warning("Please text your age and upper than 0.");
      }
      const spinner = utils.spinner().spin(spinnerTarget);
      axios
        .put("http://localhost:3100/api/v1/member", { key, member })
        .then((response) => {
          console.log(response);
          spinner.stop();
          utils.toastr().success(response.data.result);
          fromComponent.$store.dispatch(types.CRUD_READ);
        })
        .catch((error) => {
          utils.apiCommonError(error, spinner);
        });
    },
    [types.CRUD_DELETE](commit, { spinnerTarget, fromComponent, key }) {
      if (!window.confirm("Are you sure")) {
        return;
      }
      const spinner = utils.spinner().spin(spinnerTarget);
      axios
        .delete(`http://localhost:3100/api/v1/member/${key}`)
        .then((response) => {
          console.log(response);
          spinner.stop();
          utils.toastr().success(response.data.result);
          fromComponent.$store.dispatch(types.CRUD_READ);
        })
        .catch((error) => {
          utils.apiCommonError(error, spinner);
        });
    },
  },
};

// validation
const member = crudModule.state.member;
if (!member.name) {
  utils.toastr().warning("Please text your name.");
}
if (!Number(member.age) || Number(member.age) <= 0) {
  utils.toastr().warning("Please text your age and upper than 0.");
}
