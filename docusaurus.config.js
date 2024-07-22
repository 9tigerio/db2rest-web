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
  title: 'Open Source Instant Rest Data API for databases.',
  tagline: 'Unlock data, Accelerate development of secured, intelligent applications by 30x',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://db2rest.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Added and set to false because Cloudflare Pages does not support trailing slashes
  trailingSlash: false,

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

  customFields: {
    version: 'V-1.1.2',
    download_url: 'https://download.db2rest.com/db2rest-1.1.2.jar',
    download_jar: 'db2rest-1.1.2.jar',
    download_url_oracle_9i: 'https://download.db2rest.com/db2rest-oracle9i-1.1.2.jar'
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
      image: 'img/db2rest-new-banner.png',
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
          /*
          {to: '/why-you-need-db2rest', label: 'Why DB2Rest?', position: 'left'},

           */
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
        additionalLanguages: ['java'],
      },

      algolia: {
        // The application ID provided by Algolia
        appId: 'L530QZ3HMR',
  
        // Public API key: it is safe to commit it
        apiKey: '26f85fb21b0abe3d16adcf32ab61cfd3',
  
        indexName: 'db2rest',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: '/docs/', // or as RegExp: /\/docs\//
        //   to: '/',
        // },
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },


      announcementBar: {
        id: 'support_us',
        content:
            'We are updating the documentation to the latest release 1.1.2.',
        backgroundColor: '#DAF7A6',
        textColor: '#091E42',
        isCloseable: false,
      },


      /*
      announcementBar: {
        id: 'support_us',
        content:
            'We are updating our documentation <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#DAF7A6',
        textColor: '#091E42',
        isCloseable: false,
      },
      */

    }),
};

export default config;
