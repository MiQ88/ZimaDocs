/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Get Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'get-started/preparation',
        'get-started/wiring-and-power-on',
        'get-started/setup-casaos',
        'get-started/shared-folders',
        'get-started/hands-on-jellyfin',
        'get-started/hands-on-photoprism',
        'get-started/oculus-meet-zimaboard',
      ],
    },
    'troubleshooting',
    {
      type: 'category',
      label: 'Advanced',
      link: {
        type: 'generated-index',
      },
      collapsed: true,
      items: [
        'advanced/preinstalled-casaos',
        'advanced/bios',
        'advanced/install-other-system'
      ],
    },
  ],
};

module.exports = sidebars;
