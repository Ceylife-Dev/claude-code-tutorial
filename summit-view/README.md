# Summit View Landscapes: Website (MERN)

Single-page marketing site for Summit View Landscapes (Austin, TX).

- **client/**: React 18 + Vite. All copy lives in `client/src/content.js`.
- **server/**: Express API with MongoDB (Mongoose) that stores quote/consultation requests.

## Run locally

```bash
npm run install:all   # installs root, server and client packages
npm run dev           # API on :5000, site on http://localhost:5173
```

Without a database, quote requests are saved to `server/data/quotes.json`.
To use MongoDB, copy `server/.env.example` to `server/.env` and set `MONGODB_URI`
(a free MongoDB Atlas cluster works well).

## Editing content

Open `client/src/content.js` to change phone, email, hours, service areas, services,
projects, process steps and testimonials. Anything marked **PLACEHOLDER** is sample copy;
in dev mode it shows a yellow "sample" tag so it's easy to spot. Replace it before launch.

Photos live in `client/public/media/`. To add a project, drop the image there and add an
entry to `projects` in `content.js`.

## Viewing quote requests

```
GET /api/quotes
x-admin-token: <ADMIN_TOKEN from server/.env>
```

## Deploying

```bash
npm run build   # builds client/dist
npm start       # Express serves the API and the built site on PORT
```

Any Node host works (Render, Railway, a VPS, etc.). Set `MONGODB_URI`, `ADMIN_TOKEN` and
`CLIENT_ORIGIN` as environment variables on the host.

## Note on the build tools

`client/package.json` overrides Rollup and esbuild with their WebAssembly builds
(`@rollup/wasm-node`, `esbuild-wasm`) because the native binaries were blocked from downloading
on the development machine. If your network allows it, you can remove the `overrides` block,
delete `client/node_modules` and `package-lock.json`, and reinstall for slightly faster builds.
