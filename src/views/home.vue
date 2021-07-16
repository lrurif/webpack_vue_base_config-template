<template>
<div>
    <div>home的内容</div>
    {{count}}
    <button @click="add">点击+1</button>
</div>
    
</template>
<script>

export default {
    data() {
        return {
            name:11231
        }
    },
    computed: {
        count() {
            return this.$store.state.count
        }
    },
    methods: {
        add() {
            this.$store.commit("addCount")
        }
    }
}
</script>
<style>
p {
    margin: 0;
}
</style>
