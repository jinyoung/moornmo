import Vue from 'vue'
import Router from 'vue-router'

import ProductManager from "./components/listers/ProductCards"
import ProductDetail from "./components/listers/ProductDetail"


Vue.use(Router);

export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { 
            path: '//products',
            name: 'ProductManager',
            component: ProductManager,
        },
        {
            path: '//products/:id',
            name: 'ProductDetail',
            component: ProductDetail,
        },
    ]
})
