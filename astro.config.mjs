import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    astroImageTools,
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: "server",
  adapter: cloudflare(),
});
