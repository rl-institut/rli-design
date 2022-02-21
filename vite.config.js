import path from "path";
import nunjucks from "vite-plugin-nunjucks";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        // RMS index page
        rms: path.resolve(__dirname, "src/index.html"),
        // Dashboard sub-page
        dashboard: path.resolve(__dirname, "src/dashboard/index.html"),
        // Login sub-page
        login: path.resolve(__dirname, "src/login/index.html"),
        about: path.resolve(__dirname, "src/login/about/index.html"),
        contact: path.resolve(__dirname, "src/login/contact.html"),
        // On-boarding sub-page
        onboarding: path.resolve(__dirname, "src/onboarding/index.html"),
      },
    },
  },
  plugins: [nunjucks()],
};
