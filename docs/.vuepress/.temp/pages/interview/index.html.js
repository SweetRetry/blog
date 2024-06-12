import comp from "E:/Code/retry-blog/docs/.vuepress/.temp/pages/interview/index.html.vue"
const data = JSON.parse("{\"path\":\"/interview/\",\"title\":\"面试题\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\"},\"headers\":[{\"level\":2,\"title\":\"js 基础\",\"slug\":\"js-基础\",\"link\":\"#js-基础\",\"children\":[{\"level\":3,\"title\":\"闭包\",\"slug\":\"闭包\",\"link\":\"#闭包\",\"children\":[]},{\"level\":3,\"title\":\"原型和原型链\",\"slug\":\"原型和原型链\",\"link\":\"#原型和原型链\",\"children\":[]},{\"level\":3,\"title\":\"垃圾回收机制\",\"slug\":\"垃圾回收机制\",\"link\":\"#垃圾回收机制\",\"children\":[]},{\"level\":3,\"title\":\"for of和for in\",\"slug\":\"for-of和for-in\",\"link\":\"#for-of和for-in\",\"children\":[]},{\"level\":3,\"title\":\"import原理\",\"slug\":\"import原理\",\"link\":\"#import原理\",\"children\":[]}]},{\"level\":2,\"title\":\"Vue\",\"slug\":\"vue\",\"link\":\"#vue\",\"children\":[{\"level\":3,\"title\":\"路由守卫\",\"slug\":\"路由守卫\",\"link\":\"#路由守卫\",\"children\":[]},{\"level\":3,\"title\":\"底层原理\",\"slug\":\"底层原理\",\"link\":\"#底层原理\",\"children\":[]},{\"level\":3,\"title\":\"Vue3和Vue2的差异\",\"slug\":\"vue3和vue2的差异\",\"link\":\"#vue3和vue2的差异\",\"children\":[]},{\"level\":3,\"title\":\"Vue和React的差异\",\"slug\":\"vue和react的差异\",\"link\":\"#vue和react的差异\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"interview/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
