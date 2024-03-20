import { defineConfig } from 'astro/config';
import AstroPWA from '@vite-pwa/astro'

// https://astro.build/config
export default defineConfig({
  integrations: [
    AstroPWA({
    devOptions: {
        enabled: true,
        type: "module"
    },
    manifest: {
        name: 'Astro PWA',
        short_name: 'Astro PWA',
        theme_color: '#ffffff',
        display: "minimal-ui",
        icons: [
          {
            src: "/favicon.svg",
            sizes: "48x48 72x72 96x96 128x128 256x256 512x512",
            type: "image/svg+xml",
            purpose: "any"
          }
        ]
    }
  })]
});
