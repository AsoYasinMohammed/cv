import comp from "C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/project.html.vue"
const data = JSON.parse("{\"path\":\"/project.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Projects\",\"slug\":\"projects\",\"link\":\"#projects\",\"children\":[{\"level\":3,\"title\":\"Weather App with Alerts | 2024\",\"slug\":\"weather-app-with-alerts-2024\",\"link\":\"#weather-app-with-alerts-2024\",\"children\":[]},{\"level\":3,\"title\":\"QR Code Generator & Scanner | 2024\",\"slug\":\"qr-code-generator-scanner-2024\",\"link\":\"#qr-code-generator-scanner-2024\",\"children\":[]},{\"level\":3,\"title\":\"CI/CD Pipeline with Jenkins | 2025\",\"slug\":\"ci-cd-pipeline-with-jenkins-2025\",\"link\":\"#ci-cd-pipeline-with-jenkins-2025\",\"children\":[]},{\"level\":3,\"title\":\"Dockerized Web Application | 2025\",\"slug\":\"dockerized-web-application-2025\",\"link\":\"#dockerized-web-application-2025\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"project.md\"}")
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
