import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    esbuild: {
      keepNames: true,
    },
    build: {
      outDir: "dist",
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["react", "react-dom"],
          },
        },
      },
    },
    resolve: {
      alias: {
        pages: path.resolve(__dirname, "./src/pages"),
        assets: path.resolve(__dirname, "./src/assets"),
        locales: path.resolve(__dirname, "./src/locales"),
        'shared/utils': path.resolve(__dirname, "./src/shared/utils"),
        'shared/hooks': path.resolve(__dirname, "./src/shared/hooks"),
        'shared/router': path.resolve(__dirname, "./src/shared/router"),
        'shared/components': path.resolve(__dirname, "./src/shared/components"),
      },
    },
  });
};
