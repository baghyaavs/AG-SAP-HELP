// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AG SAP Help',
  tagline: 'Welcome to the AG SAP Help Portal',
  favicon: 'img/aglogo.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://baghyaavs.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/AG-SAP-HELP',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'baghyaavs', // Usually your GitHub org/user name.
  projectName: 'AG-SAP-HELP', // Usually your repo name.

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/baghyaavs/AG-SAP-HELP',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/baghyaavs/AG-SAP-HELP',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'img/ag_cover.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'AG SAP Help',
        logo: {
          alt: 'My Site Logo',
          src: 'img/ag logo.jpg',
        },
        items: [
          {
            position: 'left',
            label: 'PRODUCTS',
            items: [ { label: 'SAP ABAP', to: '/docs/SAP ABAP/Introduction'},
                      { label: 'SAP MM', to: '/docs/sap-abap/intro'},
                      { label: 'SAP PM', to: '/docs/sap-abap/intro'},
                      { label: 'SAP FICO', to: '/docs/sap-abap/intro'},
            ]
          },
          {to: '/blog', label: 'WHAT`S NEW', position: 'left'},
          {
            href: 'https://github.com/baghyaavs/AG-SAP-HELP',
            label: 'GitHub',
            position: 'right',
          },
        
        ],
      }, 
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'Disclaimer',
                to: '/docs/intro',
              },
            ],
          },
          {
            items: [
              {
                label: 'Privacy Statement',
                to: '/docs/intro',
              },
            ],
          },
           {
            items: [
              {
                label: 'Terms Of Use',
                to: '/docs/intro',
              },
            ],
          },
           {
            items: [
              {
                label: 'Cookie Preferences',
                to: '/docs/intro',
              },
            ],
          },
         
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AG SAP HELP, Inc. BAGHYAAR.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

};



export default config;
