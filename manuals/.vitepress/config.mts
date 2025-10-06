import { defineConfig, loadEnv } from "vitepress";
import { fileURLToPath } from "node:url";

// https://vitepress.dev/reference/site-config
export default ({ mode }) => {
  const env = loadEnv(mode, fileURLToPath(new URL("../", import.meta.url)));
  // ^ depending on your setup, process.cwd() might also work here

  return defineConfig({
    title: "Sample Docs",
    description: "A Vitepress Sample",
    base: "/manuals/", // base URL
    themeConfig: {
      search: {
        provider: "local",
      },
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
            { text: "Manual", link: "/" },
            { text: "Docs", link: `${env.VITE_ENV_NAME}/docs/`, target: "_self" },
          ],

          sidebar: [
            {
              text: "Examples",
              items: [
                { text: "Markdown Examples", link: "/markdown-examples" },
                { text: "Runtime API Examples", link: "/api-examples" },
              ],
            },
            {
              text: "Release Notes",
              collapsed: true,
              items: [{ text: "Release Notes", link: "/release-note" }],
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
            { text: "マニュアル", link: "/ja/" },
            { text: "ドキュメント", link: `${env.VITE_ENV_NAME}/docs/ja/`, target: "_self" },
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
              items: [{ text: "リリースノート", link: "/ja/release-note" }],
            },
          ],

          socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
        },
      },
    },
  });
};
