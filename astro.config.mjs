import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  /* server: {
    port: 3000,
    host:'192.168.0.22'
   }*/
    site: 'https://siicsa.github.io',
    base: 'siicsa',
});