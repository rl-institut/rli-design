import path from "path";
import nunjucks from "vite-plugin-nunjucks";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        login: path.resolve(__dirname, "src/index.html"),
        about: path.resolve(__dirname, "src/about/index.html"),
        contact: path.resolve(__dirname, "src/contact.html"),
        onboarding: path.resolve(__dirname, "src/onboarding/applications.html"),
      },
    },
  },
  plugins: [nunjucks()],
};
