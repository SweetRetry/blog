import comp from "/Users/retry/Documents/blog/docs/.vuepress/.temp/pages/vite/index.html.vue"
const data = JSON.parse("{\"path\":\"/vite/\",\"title\":\"Vite\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\"},\"headers\":[{\"level\":2,\"title\":\"Vite插件\",\"slug\":\"vite插件\",\"link\":\"#vite插件\",\"children\":[]},{\"level\":2,\"title\":\"更改路径名\",\"slug\":\"更改路径名\",\"link\":\"#更改路径名\",\"children\":[]}],\"git\":{\"updatedTime\":1718211588000,\"contributors\":[{\"name\":\"张殃离\",\"email\":\"96040653+ZhangYangLizzm@users.noreply.github.com\",\"commits\":1}]},\"filePathRelative\":\"vite/README.md\"}")
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
