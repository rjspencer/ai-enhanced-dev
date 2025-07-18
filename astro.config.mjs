// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'AI Enhanced Dev',
      description: 'Guides and tips for developers to use AI in their work',
      defaultLocale: 'en',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/yourusername/ai-enhanced-dev' },
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'guides/introduction' },
            { label: 'AI Tools Overview', slug: 'guides/ai-tools-overview' },
          ],
        },
        {
          label: 'Guides',
          items: [
            { label: 'Code Generation', slug: 'guides/code-generation' },
            { label: 'Debugging with AI', slug: 'guides/debugging-with-ai' },
          ],
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/yourusername/ai-enhanced-dev/edit/main',
      },
    }),
  ],
});
