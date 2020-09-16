<template>
  <span>
    <a-input class="editor input" :value="value" @change="handleChange" size="small"></a-input>
    <a-input class="editor input-color" :value="value" type="color" @change="handleChange" size="small"></a-input>
  </span>
</template>
<script>
import base from "./base";
export default {
  extends: base,
  methods: {
    handleChange(evt) {
      this.$emit("input", evt.target.value);
    },
  },
};
</script>
