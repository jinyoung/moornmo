<template>
    <v-container class="main_container">
        <router-view></router-view>
    </v-container>
</template>

<script>
    export default {
        name: "App",
        data: () => ({
        }),
        created() {
            const el = document.createElement('div')
            el.setAttribute('data-app', true)
            document.body.appendChild(el)
        },
        methods: {
        },
    };
</script>

<style>
.main_container {
    margin: 64px 0 0 256px;
    width: calc(100vw - 256px); 
    height: calc(100vh - 64px);
}
</style>
