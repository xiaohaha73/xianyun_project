import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _597c554f = () => interopDefault(import('..\\pages\\air\\index.vue' /* webpackChunkName: "pages/air/index" */))
const _42ba7236 = () => interopDefault(import('..\\pages\\hotel\\index.vue' /* webpackChunkName: "pages/hotel/index" */))
const _7ca16e3b = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _225910c0 = () => interopDefault(import('..\\pages\\air\\flights.vue' /* webpackChunkName: "pages/air/flights" */))
const _738f1136 = () => interopDefault(import('..\\pages\\air\\pay.vue' /* webpackChunkName: "pages/air/pay" */))
const _0d16f614 = () => interopDefault(import('..\\pages\\air\\purchase.vue' /* webpackChunkName: "pages/air/purchase" */))
const _a5ae5da2 = () => interopDefault(import('..\\pages\\hotel\\map.vue' /* webpackChunkName: "pages/hotel/map" */))
const _747ba547 = () => interopDefault(import('..\\pages\\user\\login.vue' /* webpackChunkName: "pages/user/login" */))
const _c36a61ca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/air",
    component: _597c554f,
    name: "air"
  }, {
    path: "/hotel",
    component: _42ba7236,
    name: "hotel"
  }, {
    path: "/post",
    component: _7ca16e3b,
    name: "post"
  }, {
    path: "/air/flights",
    component: _225910c0,
    name: "air-flights"
  }, {
    path: "/air/pay",
    component: _738f1136,
    name: "air-pay"
  }, {
    path: "/air/purchase",
    component: _0d16f614,
    name: "air-purchase"
  }, {
    path: "/hotel/map",
    component: _a5ae5da2,
    name: "hotel-map"
  }, {
    path: "/user/login",
    component: _747ba547,
    name: "user-login"
  }, {
    path: "/",
    component: _c36a61ca,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
