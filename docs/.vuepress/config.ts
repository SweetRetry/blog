import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
  base: "/blog/",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      // 导航条相关配置
      { text: "Interview", link: "/interview/" },
      { text: "TypeScript", link: "/TypeScript/" },
      { text: "Git", link: "/Git/" },
      // { text: "Node.js", link: "/NodeJs/" },
      // { text: "Plugins", link: "/plugins/" },
      { text: "Nginx", link: "/Nginx/" },
      { text: "Others", link: "/others/" },
    ],

    // sidebar: {
    //   "/plugins/": [
    //     {
    //       text: "Vue",
    //       children: ["/plugins/Vue3_Plugins"],
    //       collapsible: true,
    //     },
    //     {
    //       text: "React",
    //       children: ["/plugins/React_Plugins"],
    //     },
    //     {
    //       text: "Vite",
    //       children: ["/plugins/Vite_Plugins"],
    //     },
    //     {
    //       text: "Eslint",
    //       children: ["/plugins/Eslint"],
    //     },
    //   ],
    // },
    sidebarDepth: 2,

    lastUpdated: true,

    lastUpdatedText: "Last Updated",
  }),
});
