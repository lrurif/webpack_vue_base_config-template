<template>
<div>
    <div>测试文案</div>
    <p>{{name}}</p>
    <div>左边区域发发发</div>
    <img src="../assets/images/aaa1.jpg">
    <router-view></router-view>
    <router-link to="/home">去home</router-link>
    <router-link to="/test">去test</router-link>
</div>
    
</template>
<script>

export default {
    data() {
        return {
            name:11231
        }
    }
}
</script>
<style>
p {
    margin: 0;
}
</style>
