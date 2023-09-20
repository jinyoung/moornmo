
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import ProductManager from "./components/listers/ProductCards"
import ProductDetail from "./components/listers/ProductDetail"

import SalesOrderManager from "./components/listers/SalesOrderCards"
import SalesOrderDetail from "./components/listers/SalesOrderDetail"

import InventoryManager from "./components/listers/InventoryCards"
import InventoryDetail from "./components/listers/InventoryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '//products',
                name: 'ProductManager',
                component: ProductManager
            },
            {
                path: '//products/:id',
                name: 'ProductDetail',
                component: ProductDetail
            },

            {
                path: '//salesOrders',
                name: 'SalesOrderManager',
                component: SalesOrderManager
            },
            {
                path: '//salesOrders/:id',
                name: 'SalesOrderDetail',
                component: SalesOrderDetail
            },

            {
                path: '//inventories',
                name: 'InventoryManager',
                component: InventoryManager
            },
            {
                path: '//inventories/:id',
                name: 'InventoryDetail',
                component: InventoryDetail
            },



    ]
})
