import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sample Docs",
  description: "A Vitepress Sample",
  base: "/manuals/", // base URL
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "documents", link: "/" }, // ここに import.meta.env.VITE_DEV_NAMEというか環境に応じたアドレスを入れたい
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          { text: "Terms", link: "/terms" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
  locales: {
    root: {
      label: "English",
      lang: "en",

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Examples", link: "/markdown-examples" },
        ],

        sidebar: [
          {
            text: "Examples",
            items: [
              { text: "Markdown Examples", link: "/markdown-examples" },
              { text: "Runtime API Examples", link: "/api-examples" },
            ],
          },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
      },
    },
    ja: {
      label: "日本語",
      lang: "ja", // optional, will be added  as `lang` attribute on `html` tag
      link: "/ja/",

      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "ホーム", link: "/ja/" },
          { text: "ドキュメント", link: "/ja/markdown-examples" },
        ],

        sidebar: [
          {
            text: "取説",
            collapsed: true,
            items: [
              { text: "マークダウン例", link: "/ja/markdown-examples" },
              { text: "ランタイム API 例", link: "/ja/api-examples" },
            ],
          },
          {
            text: "リリースノート",
            collapsed: true,
            items: [{ text: "マークダウン例", link: "/ja/markdown-examples" }],
          },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
      },
    },
  },
});
