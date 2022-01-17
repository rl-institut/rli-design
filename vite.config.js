import path from "path";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "src/index.html"),
        nested: path.resolve(__dirname, "src/nested/index.html"),
      },
    },
  },
};
