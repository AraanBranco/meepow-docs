import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)


const config: Config = {
  title: 'Meepow',
  tagline: 'Make lobbies easier in Dota 2',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://mepoow.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AraanBranco', // Usually your GitHub org/user name.
  projectName: 'meepow', // Usually your repo name.

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: 'keywords', content: 'dota2, dota 2, lobbies, bot, automate lobbies, open source, custom lobby dota 2' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    headTags: [
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org/',
          '@type': 'Project',
          name: 'Meepow',
          url: 'https://meepow.io/',
          logo: 'https://meepow.io/img/meepow-full.svg',
        }),
      },
    ],
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Meepow',
      logo: {
        alt: 'Meepow Logo',
        src: 'img/logo-menu.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'sidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/AraanBranco/meepow',
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
              label: 'Getting Started',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/AraanBranco/meepow',
            },
          ],
        },
      ],
      copyright: '© 2024 - Meepow. Built with Docusaurus',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

//config.themeConfig.footer.copyright_right = 'Make with ❤️ by Araan Branco for Dota 2 Community';


export default config;
