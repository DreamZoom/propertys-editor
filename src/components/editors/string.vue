<template>
    <a-input class="input" :value="value" @change="handleChange" size="small"></a-input>
</template>
<script>
export default {
    props:{
        value:null
    },
    methods:{
        handleChange(evt){
            this.$emit("input",evt.target.value);
        }
    }
}
</script>
<style scoped>
.input {
    height: 20px;
    width: auto;
    border:none;
    background-color: #FFFFAB;
    border-radius: 0px;
}
</style>