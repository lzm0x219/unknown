import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  server: {
    port: 5620,
    historyApiFallback: true,
  },
  plugins: [pluginReact()],
});
