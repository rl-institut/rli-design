import path from "path";
import nunjucks from "vite-plugin-nunjucks";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        root: path.resolve(__dirname, "src/index.html"),
        componentButtons: path.resolve(__dirname, "src/ds/components/buttons/index.html"),
        componentCharts: path.resolve(__dirname, "src/ds/components/charts/index.html"),
        componentTable: path.resolve(__dirname, "src/ds/components/table/index.html"),
        dashboard: path.resolve(__dirname, "src/dashboard/index.html"),
        designsystem: path.resolve(__dirname, "src/ds/index.html"),
        designTokens: path.resolve(__dirname, "src/ds/design-tokens/index.html"),
        dsColors: path.resolve(__dirname, "src/ds/general/colors/index.html"),
        dsLayout: path.resolve(__dirname, "src/ds/general/layout/index.html"),
        loadingSpinner: path.resolve(__dirname, "src/spinner/index.html"),
        login: path.resolve(__dirname, "src/login/index.html"),
        loginAbout: path.resolve(__dirname, "src/login/about/index.html"),
        loginContact: path.resolve(__dirname, "src/login/contact.html"),
        onboarding: path.resolve(__dirname, "src/onboarding/index.html"),
        spinner: path.resolve(__dirname, "src/spinner/index.html"),
      },
    },
  },
  plugins: [nunjucks()],
};
