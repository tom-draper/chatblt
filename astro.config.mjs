// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
    //This will enable SSR
    output: "server",

    adapter: vercel(),
});