import comp from "C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"heroText\":\"Aso Yasin Mohammed\",\"tagline\":\"DevOps Engineer | CI/CD Enthusiast\",\"actions\":[{\"text\":\"My Resume →\",\"link\":\"/Resume\"}],\"footer\":null},\"headers\":[{\"level\":2,\"title\":\"Hello!\",\"slug\":\"hello\",\"link\":\"#hello\",\"children\":[]}],\"git\":{\"updatedTime\":1759716335000,\"contributors\":[{\"name\":\"AsoYasinMohammed\",\"username\":\"AsoYasinMohammed\",\"email\":\"asoyasin2003@gmail.com\",\"commits\":1,\"url\":\"https://github.com/AsoYasinMohammed\"}],\"changelog\":[{\"hash\":\"8aeec8038b39c789713bea3170902756642fc438\",\"time\":1759716335000,\"email\":\"asoyasin2003@gmail.com\",\"author\":\"AsoYasinMohammed\",\"message\":\"1st\"}]},\"filePathRelative\":\"README.md\"}")
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
