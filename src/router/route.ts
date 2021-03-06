/* eslint-disable */
const viewscoco = () => import('../views/co/co.vue')
const viewsdeviceIndex = () => import('../views/device/Index.vue')
const viewsHome = () => import('../views/Home.vue')
const viewsmonacoEditormonacoEditor = () => import('../views/monacoEditor/monacoEditor.vue')
const viewsperformanceapp = () => import('../views/performance/app.vue')
const viewsvueApp = () => import('../views/vue/App.vue')
const viewsvuerendercomponents = () => import('../views/vue/render/components.vue')
const viewsvuerenderrender = () => import('../views/vue/render/render.vue')
const viewsvuevueRouterFirst = () => import('../views/vue/vue-router/First.vue')
const viewsvuevueRouterHome = () => import('../views/vue/vue-router/Home.vue')
const viewsvuevueRouterrouter = () => import('../views/vue/vue-router/router.vue')
const viewsvuevueRouterSecond = () => import('../views/vue/vue-router/Second.vue')
const viewsvue3bindbind = () => import('../views/vue3/bind/bind.vue')
const viewsvue3proxyproxy = () => import('../views/vue3/proxy/proxy.vue')
export const routes = [
  {
    name: "coCo",
    path: "/coCo",
    component: viewscoco,
    disc: "coCo"
  },
  {
    name: "device-Index",
    path: "/device-Index",
    component: viewsdeviceIndex,
    disc: "device-Index"
  },
  {
    name: "Home",
    path: "/Home",
    component: viewsHome,
    disc: "Home"
  },
  {
    name: "monacoEditorMonacoEditor",
    path: "/monacoEditorMonacoEditor",
    component: viewsmonacoEditormonacoEditor,
    disc: "monacoEditorMonacoEditor"
  },
  {
    name: "performanceApp",
    path: "/performanceApp",
    component: viewsperformanceapp,
    disc: "performanceApp"
  },
  {
    name: "vue-App",
    path: "/vue-App",
    component: viewsvueApp,
    disc: "vue-App"
  },
  {
    name: "vue3BindBind",
    path: "/vue3BindBind",
    component: viewsvue3bindbind,
    disc: "vue3BindBind"
  },
  {
    name: "vue3ProxyProxy",
    path: "/vue3ProxyProxy",
    component: viewsvue3proxyproxy,
    disc: "vue3ProxyProxy"
  },
  {
    name: "vueRenderComponents",
    path: "/vueRenderComponents",
    component: viewsvuerendercomponents,
    disc: "vueRenderComponents"
  },
  {
    name: "vueRenderRender",
    path: "/vueRenderRender",
    component: viewsvuerenderrender,
    disc: "vueRenderRender"
  },
  {
    name: "vueVueRouter-First",
    path: "/vueVueRouter-First",
    component: viewsvuevueRouterFirst,
    disc: "vueVueRouter-First"
  },
  {
    name: "vueVueRouter-Home",
    path: "/vueVueRouter-Home",
    component: viewsvuevueRouterHome,
    disc: "vueVueRouter-Home"
  },
  {
    name: "vueVueRouter-Second",
    path: "/vueVueRouter-Second",
    component: viewsvuevueRouterSecond,
    disc: "vueVueRouter-Second"
  },
  {
    name: "vueVueRouterRouter",
    path: "/vueVueRouterRouter",
    component: viewsvuevueRouterrouter,
    disc: "vueVueRouterRouter"
  }
]