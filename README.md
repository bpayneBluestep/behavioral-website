# behavioral-website

Published static artifact for the **BlueStep Behavioral Health marketing site**,
served as a BlueStep GitSite under `/spa/` at
`https://behavioralweb.bluestep.net/spa/`.

## ⚠️ This repo is build output, not source

The site source is a **Next.js** app that lives separately at
`C:\Users\payne\bluestep-bh` (GSD project; plans in `C:\Users\payne\.planning`).
The files committed here are the exported static build (`index.html`, `_next/`,
per-route folders). GitSite does **no** build — it serves these files as-is.

## Updating the deployed site

From the Next.js source repo (`bluestep-bh`), build for the `/spa/` subpath and
copy the export into this repo's root, then commit + push:

```bash
# in bluestep-bh
NEXT_PUBLIC_BASE_PATH=/spa npm run build    # -> out/
# copy out/* into this repo root (replacing the previous artifact), then:
git add -A && git commit -m "Deploy: <what changed>" && git push
```

`NEXT_PUBLIC_BASE_PATH=/spa` is required: it drives Next's `basePath` **and** the
`asset()` helper (`src/lib/asset.ts`) so image `src`s / CSS `url()`s resolve
under `/spa/` (Next does not apply `basePath` to raw image srcs, only to
`<Link>`).

On push, the GitSite webhook auto-deploys (if the site's Webhook Secret matches);
otherwise hit **Pull** on the Git Site admin page. Git Ref is `main`,
Index Path `index.html`.

## Known cosmetic note

Next 16 App-Router hover-prefetch requests a per-route RSC `.txt` payload that
isn't emitted for static export, so you'll see occasional `__next.*.txt` 404s in
the console. They're harmless — link clicks fall back to a full page load.
