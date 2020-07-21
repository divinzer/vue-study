<template>
  <div>
    <h3>Search</h3>
    <hr class="d-block" />
    <div>
      <input
        type="text"
        placeholder="Name"
        v-model="member.name"
        @keypress="keyPress($event)"
      />
      <button class="relative pointer" @click="read()">Search</button>
    </div>
    <hr class="d-block" />
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Created Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, key) in members" :key="key">
            <td>{{ member.name }}</td>
            <td>{{ member.age }}</td>
            <td>{{ moment(member.createDate).format("YYYY-MM-DD") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
import * as types from "../../../shared/stores/types";

export default {
  watch: {
    "$route.query": function(query, beforeQuery) {
      console.log(query, beforeQuery);
      this.member.name = query.name || "";
      this.$store.dispatch(types.SEARCH_READ);
    },
  },
  computed: {
    ...mapState({
      member: (state) => state.search.member,
      members: (state) => state.search.members,
    }),
    moment() {
      return moment;
    },
  },
  methods: {
    read() {
      this.$router.push({ name: "search", query: { name: this.member.name } });
    },
    keyPress(e) {
      if (e.charCode === 13) {
        this.read();
      }
    },
    created() {
      this.member.name = this.$route.query.name || "";
      this.$store.dispatch(types.SEARCH_READ);
    },
  },
};
</script>

<style lang="scss"></style>
