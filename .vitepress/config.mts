import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RevSplit",
  description: "RevSplit product documentation",
  appearance: false,

  themeConfig: {
    nav: [
      { text: 'My account', link: 'https://app.getrevsplit.com/?via=help' },
      { text: 'Contact support', link: 'https://getrevsplit.com/contact?via=help' }
    ],
    logo: '/img/revsplit_black.svg',
    siteTitle: false,
    
    search: {
      provider: 'local'
    },

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Getting started', link: '/getting-started' },
      {
        text: 'Clients',
        items: [
          { text: 'What are Clients?', link: '/clients' },
          { text: 'Adding a Client', link: '/clients/adding-a-client' },
          { text: 'Deleting a Client', link: '/clients/deleting-a-client' },
        ]
      },
      {
        text: 'Hosts',
        items: [
          { text: 'What are Hosts?', link: '/clients' },
          { text: 'Adding a Host', link: '/hosts/adding-a-host' },
          { text: 'Deleting a Host', link: '/hosts/deleting-a-host' },
        ]
      },
      {
        text: 'Payment Methods',
        items: []
      },
      {
        text: 'Ownership',
        items: []
      },
      {
        text: 'Audio Assets',
        items: []
      },
      {
        text: 'Video Assets',
        items: []
      },
      {
        text: 'Payouts',
        items: []
      },
      {
        text: 'My account',
        items: []
      },
      {
        text: 'Billing',
        items: []
      },
    ],

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/revsplit' },
      { icon: 'facebook', link: 'https://facebook.com/revsplit' },
      { icon: 'instagram', link: 'https://instagram.com/revsplit' }
    ]
  }
})
