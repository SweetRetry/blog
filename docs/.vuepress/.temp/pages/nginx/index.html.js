import comp from "E:/Code/retry-blog/docs/.vuepress/.temp/pages/nginx/index.html.vue"
const data = JSON.parse("{\"path\":\"/nginx/\",\"title\":\"Nginx 配置文件详解\",\"lang\":\"en-US\",\"frontmatter\":{\"sidebar\":\"auto\"},\"headers\":[{\"level\":2,\"title\":\"文件结构\",\"slug\":\"文件结构\",\"link\":\"#文件结构\",\"children\":[]},{\"level\":2,\"title\":\"全局块\",\"slug\":\"全局块\",\"link\":\"#全局块\",\"children\":[]},{\"level\":2,\"title\":\"events 块\",\"slug\":\"events-块\",\"link\":\"#events-块\",\"children\":[]},{\"level\":2,\"title\":\"http 块\",\"slug\":\"http-块\",\"link\":\"#http-块\",\"children\":[]},{\"level\":2,\"title\":\"server 块\",\"slug\":\"server-块\",\"link\":\"#server-块\",\"children\":[{\"level\":3,\"title\":\"listen 指令\",\"slug\":\"listen-指令\",\"link\":\"#listen-指令\",\"children\":[]},{\"level\":3,\"title\":\"server_name\",\"slug\":\"server-name\",\"link\":\"#server-name\",\"children\":[]},{\"level\":3,\"title\":\"location 块\",\"slug\":\"location-块\",\"link\":\"#location-块\",\"children\":[]},{\"level\":3,\"title\":\"root 指令\",\"slug\":\"root-指令\",\"link\":\"#root-指令\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"nginx/README.md\"}")
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
