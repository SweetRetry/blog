export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/Git/", { loader: () => import(/* webpackChunkName: "Git_index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/Git/index.html.js"), meta: {"title":"Git"} }],
  ["/Nginx/", { loader: () => import(/* webpackChunkName: "Nginx_index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/Nginx/index.html.js"), meta: {"title":"Nginx 配置文件详解"} }],
  ["/NodeJs/", { loader: () => import(/* webpackChunkName: "NodeJs_index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/NodeJs/index.html.js"), meta: {"title":"Node.Js"} }],
  ["/interview/", { loader: () => import(/* webpackChunkName: "interview_index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/interview/index.html.js"), meta: {"title":"面试题"} }],
  ["/others/", { loader: () => import(/* webpackChunkName: "others_index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/others/index.html.js"), meta: {"title":"Other"} }],
  ["/plugins/Eslint.html", { loader: () => import(/* webpackChunkName: "plugins_Eslint.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/plugins/Eslint.html.js"), meta: {"title":"Eslint"} }],
  ["/plugins/React_Plugins.html", { loader: () => import(/* webpackChunkName: "plugins_React_Plugins.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/plugins/React_Plugins.html.js"), meta: {"title":"React Plugins"} }],
  ["/plugins/Vite_Plugins.html", { loader: () => import(/* webpackChunkName: "plugins_Vite_Plugins.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/plugins/Vite_Plugins.html.js"), meta: {"title":"Vite Plugins"} }],
  ["/plugins/Vue3_Plugins.html", { loader: () => import(/* webpackChunkName: "plugins_Vue3_Plugins.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/plugins/Vue3_Plugins.html.js"), meta: {"title":"Vue Plugins"} }],
  ["/TypeScript/", { loader: () => import(/* webpackChunkName: "TypeScript_index.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/TypeScript/index.html.js"), meta: {"title":"TypeScript"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
