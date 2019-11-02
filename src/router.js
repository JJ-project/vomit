import Vue from 'vue'
import Router from 'vue-router'

import {Login,Index,SignUp,MyPage} from './pages'

Vue.use(Router);

export default new Router({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        {
            path:'/',
            name:'index',
            component:Index
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'/signup',
            name:'signup',
            component:SignUp
        },
        {
            path:'/mypage/:pk',
            name:'mypage',
            component:MyPage
        }
    ]
});