# behavioral-website

Static SPA deployable as a BlueStep GitSite, served under `/spa/`.

## Build & deploy

```bash
npm install
npm run build   # emits index.html + assets/ at the repo root (this IS the served artifact)
```

Push to `main` and the GitSite webhook auto-deploys. Browse at
`https://behavioralweb.bluestep.net/spa/`.
