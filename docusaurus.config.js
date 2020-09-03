module.exports = {
  title: "Temper",
  tagline: "State management for React, made simple.",
  url: "https://temperjs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "ktripaldi",
  projectName: "Temper",
  themeConfig: {
    defaultMode: "light",
    switchConfig: {
      darkIcon: "🔅",
      lightIcon: "🔆️",
    },
    navbar: {
      title: "Temper",
      logo: {
        alt: "Temper Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/core_concepts",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/ktripaldi/temperjs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Learn",
          items: [
            {
              label: "Core Concepts",
              to: "docs/core_concepts",
            },
          ],
        },
        {
          title: "Use",
          items: [
            {
              label: "Getting Started",
              to: "docs/getting_started",
            },
          ],
        },
        {
          title: "Help",
          items: [
            {
              label: "Contributing",
              to: "docs/contributing",
            },
          ],
        },
      ],
      copyright: `<img class="logo" src='/img/logo.svg' /><p>Copyright © ${new Date().getFullYear()} Kenderson Tripaldi</p>`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/oceanicNext"),
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
};
