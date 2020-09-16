<template>
  <a-date-picker class="editor input" :value="currentDate" @change="handleChange" size="small" />
</template>
<script>
import moment from "moment";
import base from "./base";
export default {
  extends: base,
  computed: {
    currentDate() {
      return moment(this.value || new Date());
    },
  },
  mounted() {
    if (!this.value) {
      this.$emit("input", moment(new Date()).format("YYYY-MM-DD"));
    }
  },
  methods: {
    handleChange(date, dateString) {
      this.$emit("input", dateString);
    },
  },
};
</script>
