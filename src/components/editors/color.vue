<template>
  <span>
    <a-input class="input" :value="value" @change="handleChange" size="small"></a-input>
    <a-input class="input-color" :value="value" type="color" @change="handleChange" size="small"></a-input>
  </span>
</template>
<script>
export default {
  props: {
    value: null,
  },
  methods: {
    handleChange(evt) {
      this.$emit("input", evt.target.value);
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
.input-color {
  height: 20px;
  width: 40px;
  border: none;
  background-color: #ffffab;
  border-radius: 0px;
}
</style>