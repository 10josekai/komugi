// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon"; // ← import があるか確認

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon() // ← ここに icon() が追加されているか確認
  ]
});