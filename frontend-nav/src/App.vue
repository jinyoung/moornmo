<template>
    <v-app>
        <v-app-bar 
                app 
                clipped-left 
                flat
                color="primary"
        >
            <v-toolbar-title>
                <span class="second-word font uppercase"
                    style="font-weight:700;"
                >
                    <v-app-bar-nav-icon
                        @click="openSideBar()"
                        style="z-index:1;
                        height:56px;
                        width:30px;
                        margin-right:10px;
                        font-weight:300;
                        font-size:55px;"
                    >
                        <div style="line-height:100%;">≡</div>
                    </v-app-bar-nav-icon>
                </span>
            </v-toolbar-title>

            <v-btn icon to="/">
                <v-icon>mdi-home</v-icon>
            </v-btn>
            
            <v-spacer></v-spacer>

        </v-app-bar>

        <v-navigation-drawer 
                v-model="sideBar"
                app 
                clipped 
                flat 
        >
            <v-list>
                <v-list-item
                    class="px-2"
                    key="products"
                    to="//products"
                    color="primary"
                    style="font-weight:700;"
                >
                    Product
                </v-list-item>

                <v-list-item
                    class="px-2"
                    key="salesOrders"
                    to="//salesOrders"
                    color="primary"
                    style="font-weight:700;"
                >
                    SalesOrder
                </v-list-item>

                <v-list-item
                    class="px-2"
                    key="inventories"
                    to="//inventories"
                    color="primary"
                    style="font-weight:700;"
                >
                    Inventory
                </v-list-item>

            </v-list>
        </v-navigation-drawer>

        <v-main v-if="urlPath==='/'" style="width: 100vw;">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    export default {
        name: "App",
        data: () => ({
            sideBar: true,
        }),
        created() {
        },
        computed: {
            urlPath() {
                return location.hash.replace('#', '')
            }
        },
        methods: {
            openSideBar(){
                this.sideBar = !this.sideBar
            },
        }
    };
</script>

<style>
</style>
