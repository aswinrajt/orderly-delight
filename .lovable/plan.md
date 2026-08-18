# Replace the default favicon with an app brand icon

Right now the site still ships the default platform icon at `public/favicon.ico`, referenced from the root route.

## What changes

1. Generate a square brand mark for the food-ordering app (warm amber/orange, simple silhouette that reads at 16px — e.g. a stylized burger/fork mark on a dark futuristic tile), matching the app's existing amber theme.
2. Save it as `public/favicon.png` (downscaled to 64x64, padded not stretched).
3. Update the icon link in `src/routes/__root.tsx` to `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
4. Delete `public/favicon.ico` so no stale default icon is served.
5. Clean up remaining platform branding in the repo text: rewrite `README.md` to describe the ordering app with no platform mentions.

## Notes

- `src/lib/lovable-error-reporting.ts` is platform tooling wired into the root route for preview error reporting; renaming or deleting it would break the preview, so it stays.
- No UI or app logic changes; the icon and README are the only user-visible edits.
