<template>
  <a-select class="editor input" size="small" :value="value" @change="handleChange">
    <a-select-option v-for="(item,i) in select" :key="i" :value="item.value">{{item.name}}</a-select-option>
  </a-select>
</template>
<script>
import base from "./base";
export default {
  extends: base,
  data() {
    return {
      select: [],
    };
  },
  mounted() {
    const enumobj = this.schema.enum || this.schema.select || {};
    if (enumobj instanceof Array) {
      for (let index = 0; index < enumobj.length; index++) {
        const element = enumobj[index];
        if (element instanceof Object) {
          this.select.push({
            name: element.name,
            value: element.value,
          });
        } else {
          this.select.push({
            name: element,
            value: element,
          });
        }
      }
    } else if (typeof enumobj == "object") {
      for (const key in enumobj) {
        const element = enumobj[key];
        this.select.push({
          name: element,
          value: key,
        });
      }
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("input", value);
    },
  },
};
</script>