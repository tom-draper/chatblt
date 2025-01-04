// @ts-check
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

export default defineConfig({
    //This will enable SSR
    output: "server",

    adapter: node({
        mode: "standalone",
    }),
});