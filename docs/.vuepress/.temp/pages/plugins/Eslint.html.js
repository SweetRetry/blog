import comp from "E:/Code/retry-blog/docs/.vuepress/.temp/pages/plugins/Eslint.html.vue"
const data = JSON.parse("{\"path\":\"/plugins/Eslint.html\",\"title\":\"Eslint\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"安装Eslint\",\"slug\":\"安装eslint\",\"link\":\"#安装eslint\",\"children\":[]},{\"level\":2,\"title\":\"Vue相关\",\"slug\":\"vue相关\",\"link\":\"#vue相关\",\"children\":[]},{\"level\":2,\"title\":\"Typescript相关\",\"slug\":\"typescript相关\",\"link\":\"#typescript相关\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"plugins/Eslint.md\"}")
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
