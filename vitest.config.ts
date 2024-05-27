import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    coverage: {
        all: true,
        exclude: ["coverage/**", "dist/**", "node_modules/**", "scripts/**"],
      },
    include: ["__tests__/**/*.spec.ts"],
  },
});