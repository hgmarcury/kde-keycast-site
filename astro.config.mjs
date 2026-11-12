// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: "https://hgmarcury.github.io",
    base: "/kde-keycast-site",
    vite: {
        plugins: [tailwindcss()],
    },
});
