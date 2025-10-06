import { defineConfig, loadEnv } from "vitepress";
import { fileURLToPath } from "node:url";

// https://vitepress.dev/reference/site-config
export default ({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL("../", import.meta.url)));
  // ^ depending on your setup, process.cwd() might also work here

  return defineConfig({
    title: "Sample Docs",
    description: "A Vitepress Sample",
    base: "/docs/", // base URL
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config

      socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
    locales: {
      root: {
        label: "English",
        lang: "en",

        themeConfig: {
          // https://vitepress.dev/reference/default-theme-config
          nav: [
            { text: "Manual", link: `${env.VITE_ENV_NAME}/manuals/` },
            { text: "Docs", link: "/" },
          ],

          sidebar: [
            {
              text: "Examples",
              items: [
                { text: "Terms", link: "/terms" },
                { text: "Privacy", link: "/privacy" },
                { text: "Cookie", link: "/cookie" },
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
            { text: "マニュアル", link: `${env.VITE_ENV_NAME}/manuals/ja/` },
            { text: "ドキュメント", link: "/ja/" },
          ],

          sidebar: [
            {
              text: "例",
              items: [
                { text: "利用規約", link: "/ja/terms" },
                { text: "プライバシー", link: "/ja/privacy" },
                { text: "クッキー", link: "/ja/cookie" },
              ],
            },
          ],

          socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
        },
      },
      tha: {
        label: "Thailand",
        lang: "tha", // optional, will be added  as `lang` attribute on `html` tag
        link: "/tha/",

        themeConfig: {
          // https://vitepress.dev/reference/default-theme-config
          nav: [
            { text: "Manual", link: `${env.VITE_ENV_NAME}/manuals/` },
            { text: "Docs", link: "/tha/" },
          ],

          sidebar: [
            {
              text: "例",
              items: [
                { text: "Terms", link: "/tha/terms" },
                { text: "Privacy", link: "/tha/privacy" },
                { text: "Cookie", link: "/tha/cookie" },
              ],
            },
          ],

          socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
        },
      },
    },
  });
};
