import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wowforever60.com',
  trailingSlash: 'always',
  server: {
    allowedHosts: ['bowl-anatomy-through-gig.trycloudflare.com'],
  },
  integrations: [sitemap({
    filter: (page) => page !== 'https://wowforever60.com/' && !page.includes('/404'),
  })],
});
