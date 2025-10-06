export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/project.html", { loader: () => import(/* webpackChunkName: "project.html" */"C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/project.html.js"), meta: {"title":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/Resume.html", { loader: () => import(/* webpackChunkName: "Resume.html" */"C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/Resume.html.js"), meta: {"title":""} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Aso/Desktop/yo/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
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
