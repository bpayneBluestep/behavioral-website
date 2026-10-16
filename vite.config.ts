import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const repoRoot = dirname(fileURLToPath(import.meta.url))

// GitSite contract (same as cobalt-gitsite):
//
//   /spa/**  the only mount that streams real files. Assets MUST be requested here.
//   /        serves this app's index.html for "/" and for any deeper extensionless
//            browser GET. It never serves a file.
//
// So `base` is an ASSET base, not a route prefix. It stays absolute "/spa/" for the
// build. Routes carry no prefix (see app/src/main.tsx). Dev serves from "/" so local
// URLs match production route-for-route.
//
// The deploy artifact is the committed build output at the repo root. Source is ./app.
export default defineConfig(({ command }) => ({
  root: 'app',
  base: command === 'build' ? '/spa/' : '/',
  plugins: [react()],
  build: {
    outDir: resolve(repoRoot),
    emptyOutDir: false,
  },
}))
