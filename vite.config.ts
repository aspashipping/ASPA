// Vite config for static GitHub Pages build
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Base URL for GitHub Pages (repo name)
  vite: {
    base: "/",
  },
  tanstackStart: {
    defaultSsr: false,
    // Enable static prerendering of all routes
    prerender: {
      enabled: true,
    },
    // Disable SSR build output – we only need the client bundle
    ssr: false,
  },
});

