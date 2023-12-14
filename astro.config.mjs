import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://blog-astro-site-brandonhecams-projects.vercel.app/",
  integrations: [preact()]
});