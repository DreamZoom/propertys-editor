<template>
    <a-input-number class="editor input" :value="value" @change="handleChange" size="small" />
</template>
<script>
import base from "./base";
export default {
    extends:base,
    props:{
        value:null
    },
    methods:{
        handleChange(value){    
            this.$emit("input",value);
        }
    }
}
</script>
