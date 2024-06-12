export const themeData = JSON.parse("{\"displayAllHeaders\":true,\"activeHeaderLinks\":false,\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Interview\",\"link\":\"/interview\"},{\"text\":\"TypeScript\",\"link\":\"/typeScript\"},{\"text\":\"Git\",\"link\":\"/git\"},{\"text\":\"Node.js\",\"link\":\"/node\"},{\"text\":\"Plugins\",\"link\":\"/plugins\"},{\"text\":\"Nginx\",\"link\":\"/nginx\"},{\"text\":\"Other\",\"link\":\"/others\"}],\"sidebar\":{\"/plugins/\":[{\"text\":\"Vue\",\"children\":[\"/plugins/Vue3_Plugins\"],\"collapsible\":true},{\"text\":\"React\",\"children\":[\"/plugins/React_Plugins\"]},{\"text\":\"Vite\",\"children\":[\"/plugins/Vite_Plugins\"]},{\"text\":\"Eslint\",\"children\":[\"/plugins/Eslint\"]}]},\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"smoothScroll\":true,\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
