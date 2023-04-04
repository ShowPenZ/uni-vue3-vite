import { defineConfig } from "vite";
const path = require("path");
import uni from "@dcloudio/vite-plugin-uni";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  envDir: path.resolve(__dirname, "./env"),
  alias: {
    "@": path.resolve(__dirname, "src"),
  },
  // build: {
  //   rollupOptions: {
  //     external: ["crypto-js/aes", "crypto-js/enc-utf8"],
  //   },
  // },
});

