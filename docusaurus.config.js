// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  scripts: [
  { src: 'https://plausible.io/js/script.file-downloads.js',
    'data-domain': 'db2rest.com',
    defer: true,
    async: false,
  }],
  title: 'Open Source REST DATA API Platform.',
  tagline: 'Accelerate development of intelligent applications on top of AI powered databases and LLM services.',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://db2rest.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kdhrubo', // Usually your GitHub org/user name.
  projectName: 'db2rest', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
            // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
           // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // Replace with your project's social card
      image: 'img/db2-rest-card.png',
      navbar: {
        title: 'DB2Rest',
        logo: {
          alt: 'DB2Rest Logo',
          src: 'img/logo-db2rest.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/why-you-need-db2rest', label: 'Why DB2Rest?', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/roadmap', label: 'Roadmap', position: 'left'},
          {
            href: 'https://github.com/kdhrubo/db2rest',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/XP7aqKsv',
              },
              {
                label: 'Slack',
                href: 'https://db2rest.slack.com',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/db2rest',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/kdhrubo/db2rest',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DB2Rest. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
