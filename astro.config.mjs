// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Pure static site — no SSR adapter, no runtime image endpoint.
  // All <Image> components are pre-optimized to .webp at build time.
  output: "static",

  // Force the sharp build-time image service. This ensures images are
  // converted to .webp during `astro build` instead of being deferred
  // to a runtime /_image? endpoint (which doesn't exist on Cloudflare
  // Workers / static hosts).
  image: {
    service: { entrypoint: "astro/assets/services/sharp" },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
