import { bindings, defineConfig, defineWorker } from "cf/config";

export default defineConfig({
  worker: defineWorker({
    name: "new-job",
    entrypoint: "vinext/server/fetch-handler",
    compatibilityDate: "2026-11-08",
    compatibilityFlags: ["nodejs_compat"],
    assets: {
      htmlHandling: "none",
      notFoundHandling: "none",
      runWorkerFirst: ["/*", "!/_next/static/*", "!/*/_next/static/*"],
    },
    env: {
  ASSETS: bindings.assets(),
  VINEXT_KV_CACHE: bindings.kv(),
},
  }),
});
