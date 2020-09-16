<template>
    <a-input class="editor input" :value="value" @change="handleChange" size="small"></a-input>
</template>
<script>
import base from "./base";
export default {
    extends:base,
    methods:{
        handleChange(evt){
            this.$emit("input",evt.target.value);
        }
    }
}
</script>