import Vue from 'vue'
import Router from 'vue-router'

import InventoryManager from "./components/listers/InventoryCards"
import InventoryDetail from "./components/listers/InventoryDetail"


Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '//inventories',
            name: 'InventoryManager',
            component: InventoryManager,
        },
        {
            path: '//inventories/:id',
            name: 'InventoryDetail',
            component: InventoryDetail,
        },
    ]
})
