<template>
    <a-date-picker class="input" :value="currentDate" @change="handleChange" size="small" />
</template>
<script>
import moment from "moment"
export default {
  props: {
    value: null,
  },
  computed:{
      currentDate(){
          return moment(this.value||new Date());
      }
  },
  mounted(){
      if(!this.value){
          this.$emit("input", moment(new Date()).format("YYYY-MM-DD"));
      }
  },
  methods: {
    handleChange(date,dateString) {
      this.$emit("input", dateString);
    },
  },
};
</script>
<style scoped>
.input {
  height: 20px;
  width: auto;
  border: none;
  background-color: #ffffab;
  border-radius: 0px;
}
</style>