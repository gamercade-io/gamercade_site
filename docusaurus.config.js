// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gamercade',
  tagline: 'The ultimate WASM powered fantasy console and platform',
  url: 'https://gamercade.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gamercade-io',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Gamercade',
        logo: {
          alt: 'Gamercade Logo',
          src: 'img/logo-trans.png',
        },
        items: [
          { to: '/what-is-gamercade', label: 'What is Gamercade?', position: 'left'},
          { to: '/faq', label: 'FAQ', position: 'left'},
          { to: '/downloads', label: 'Downloads', position: 'left' },
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Learn',
          },
          {
            to: '/community', label: 'Community', position: 'left',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/gamercade-io/gamercade_console',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/support-gamercade',
            label: 'Support Gamercade',
            position: 'right',
          },
          {
            href: 'https://reddit.com/r/gamercade/',
            label: '/r/gamercade',
            position: 'right',
          },
          {
            href: 'https://discord.gg/Qafv2Fpt5j',
            label: 'Discord',
            position: 'right',
          }
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //         {
      //           label: 'Api Reference',
      //           to: '/docs/api-reference'
      //         }
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Discord',
      //           href: 'https://discord.gg/Qafv2Fpt5j',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //       ],
      //     },
      //   ],
      //   //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust'],
      },
    }),
};

module.exports = config;
