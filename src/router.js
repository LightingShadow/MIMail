import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/home'
import Index from './pages/index'
import Product from './pages/product'
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import Alipay from './pages/alipay'
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            children: [
                {
                    path: 'index',
                    name: 'home-index',
                    component: Index
                },
                {
                    path: 'product/:id',
                    name: 'home-product',
                    component: Product
                },
                {
                    path: 'detail/:id',
                    name: 'home-detail',
                    component: Detail
                },
            ],
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'list',
                    name: 'order-list',
                    component: OrderList,
                },
                {
                    path: 'confirm',
                    name: 'order-confirm',
                    component: OrderConfirm,
                },
                {
                    path: 'pay',
                    name: 'order-pay',
                    component: OrderPay,
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: Alipay,
                }
            ]
        },
    ]
})