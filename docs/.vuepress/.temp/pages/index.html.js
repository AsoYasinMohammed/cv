import comp from "C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Aso Yasin Mohammed\",\"tagline\":\"DevOps Engineer | CI/CD Enthusiast\",\"actions\":[{\"text\":\"My Resume →\",\"link\":\"/Resume\"}],\"footer\":null},\"headers\":[{\"level\":2,\"title\":\"Hello!\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
