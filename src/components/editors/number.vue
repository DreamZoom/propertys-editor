<template>
    <a-input-number class="input" :value="value" @change="handleChange" size="small" />
</template>
<script>
export default {
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
<style scoped>
.input {
    width: auto;
    border:none;
    height: 20px;
    border-radius: 0px;
    background-color: #FFFFAB;
}
</style>