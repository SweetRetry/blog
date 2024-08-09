export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Interview\",\"link\":\"/interview/\"},{\"text\":\"TypeScript\",\"link\":\"/TypeScript/\"},{\"text\":\"Git\",\"link\":\"/Git/\"},{\"text\":\"Nginx\",\"link\":\"/Nginx/\"},{\"text\":\"Others\",\"link\":\"/others/\"}],\"sidebarDepth\":2,\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
