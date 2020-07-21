<template>
  <div>
    <h3>CRUD</h3>
    <hr class="d-block" />
    <div>
      <h4>Read</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Created Date</th>
            <th>Modify</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, key) in members" :key="key">
            <td>
              <input type="text" placeholder="Name" v-model="member.name" />
            </td>
            <td>
              <input type="text" placeholder="Age" v-model="member.age" />
            </td>
            <td>{{ moment(member.createdDate).format("YYYY-MM-DD") }}</td>
            <td>
              <button
                class="relative pointer"
                @click="update($event.target, key)"
              >
                Update
              </button>
              <button class="relative pointer" @click="del($event.target, key)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <hr class="d-block" />
    <div>
      <h4>Create</h4>
      <input type="text" placeholder="Name" v-model="member.name" />
      <input type="text" placeholder="Age" v-model="member.age" />
      <button class="relative pointer" @click="create($event.target)">
        Create
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as types from "../../../shared/stores/types";
import moment from "moment";

export default {
  computed: {
    ...mapState({
      member: (state) => state.crud.member,
      members: (state) => state.crud.members,
    }),
    moment() {
      return moment;
    },
  },
  methods: {
    create(spinnerTarget) {
      this.$store.dispatch(types.CRUD_CREATE, {
        spinnerTarget,
        fromComponent: this,
      });
    },
    update(spinnerTarget, key) {
      this.$store.dispatch(types.CRUD_UPDATE, {
        spinnerTarget,
        fromComponent: this,
        key,
      });
    },
    del(spinnerTarget, key) {
      this.$store.dispatch(types.CRUD_DELETE, {
        spinnerTarget,
        fromComponent: this,
        key,
      });
    },
  },
  created() {
    this.member.name = "";
    this.member.age = "";
    this.$store.dispatch(types.CRUD_READ);
  },
};
</script>

<style lang="scss"></style>
