/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "TODS matchUpFormat",
  tagline: "parse and stringify matchUpFormat codes",
  url: "https://courthive.github.io",
  baseUrl: "/tods-matchup-format-code/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "CourtHive", // Usually your GitHub org/user name.
  projectName: "tods-matchup-format-code", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "matchUpFormat",
      logo: {
        alt: "CourtHive",
        src: "img/CourtHive.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "/demo",
          label: "Demo",
          position: "left",
        },
        // { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/courthive/tods-matchup-format-code",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Getting Started",
        //       to: "docs/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "",
        //     },
        //     {
        //       label: "Discord",
        //       href: "",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://github.com/courthive/tods-matchup-format-code",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CourtHive`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        // blog: {
        //   showReadingTime: true,
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
