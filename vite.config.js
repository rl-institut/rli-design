import path from "path";
import nunjucks from "vite-plugin-nunjucks";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        root: path.resolve(__dirname, "src/index.html"),
        dashboard: path.resolve(__dirname, "src/dashboard/index.html"),
        designsystem: path.resolve(__dirname, "src/ds/index.html"),
        login: path.resolve(__dirname, "src/login/index.html"),
        loginAbout: path.resolve(__dirname, "src/login/about/index.html"),
        loginContact: path.resolve(__dirname, "src/login/contact.html"),
        onboarding: path.resolve(__dirname, "src/onboarding/index.html"),
      },
    },
  },
  plugins: [nunjucks()],
};
