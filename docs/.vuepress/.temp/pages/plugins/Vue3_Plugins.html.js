import comp from "/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/plugins/Vue3_Plugins.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/Vue3_Plugins.html\",\"title\":\"Vue Plugins\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"自动引入\",\"slug\":\"自动引入\",\"link\":\"#自动引入\",\"children\":[{\"level\":3,\"title\":\"自动引入组件\",\"slug\":\"自动引入组件\",\"link\":\"#自动引入组件\",\"children\":[]},{\"level\":3,\"title\":\"用于hooks函数自动引入\",\"slug\":\"用于hooks函数自动引入\",\"link\":\"#用于hooks函数自动引入\",\"children\":[]}]}],\"git\":{\"updatedTime\":1718211588000,\"contributors\":[{\"name\":\"张殃离\",\"email\":\"96040653+ZhangYangLizzm@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"plugins/Vue3_Plugins.md\"}")
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
