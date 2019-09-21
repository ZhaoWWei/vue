import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import App from "./app.vue";

import VueResource from "vue-resource";
Vue.use(VueResource);

import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css"

import {Header, Swipe, SwipeItem} from "mint-ui";
Vue.component(Header.name, Header);

import router from "./router.js";



var vm = new Vue({
    el: "#app",
    data: {

    },
    methods: {

    },
    render: c => c(App),
    router
});
