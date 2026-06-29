import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const appDir = path.join(root, "app");
const outputPath = path.join(root, "Guitar-Hero.html");
const outputDir = path.join(root, "docs");
const pagesIndexPath = path.join(outputDir, "index.html");
const scriptFiles = [
  "config.js",
  "data/songs.js",
  "data/cigarettes-chart.js",
  "data/cast-no-shadow-chart.js",
  "data/cast-no-shadow-order.js",
  "data/oasis-more-songs.js",
  "data/champagne-supernova-chart.js",
  "data/little-by-little.js",
  "data/black-betty.js",
  "data/carry-on-wayward-son.js",
  "data/rock-n-roll-star.js",
  "data/rock-n-roll-star-chart.js",
  "data/live-forever.js",
  "data/listen-up.js",
  "data/round-are-way.js",
  "data/waterfall.js",
  "data/paint-it-black.js",
  "data/sweet-home-alabama.js",
  "data/the-boys-of-summer.js",
  "data/a-simple-life.js",
  "data/the-middle.js",
  "data/pdf-song-additions.js",
  "data/tone-settings.js",
  "data/library-metadata.js",
  "data/academy-data.js",
  "app.js"
];

const env = loadEnvFile(path.join(root, ".env"));
const supabaseEnv = {
  VITE_SUPABASE_URL: process.env.VITE_SUPABASE_URL || env.VITE_SUPABASE_URL || "",
  VITE_SUPABASE_ANON_KEY: process.env.VITE_SUPABASE_ANON_KEY || env.VITE_SUPABASE_ANON_KEY || ""
};

let html = fs.readFileSync(path.join(appDir, "index.html"), "utf8");
const css = fs.readFileSync(path.join(appDir, "styles.css"), "utf8");
const embeddedImages = fs.readdirSync(path.join(appDir, "assets"))
  .filter((filename) => filename.toLowerCase().endsWith(".png"));

let javascript = scriptFiles
  .map((file) => `\n/* ${file} */\n${fs.readFileSync(path.join(appDir, file), "utf8")}`)
  .join("\n");

javascript = javascript.replace(
  /window\.__GUITAR_HERO_ENV__ = window\.__GUITAR_HERO_ENV__ \|\| \{[\s\S]*?\};/,
  `window.__GUITAR_HERO_ENV__ = ${JSON.stringify(supabaseEnv, null, 2)};`
);

embeddedImages.forEach((filename) => {
  const image = fs.readFileSync(path.join(appDir, "assets", filename));
  const dataUri = `data:image/png;base64,${image.toString("base64")}`;
  javascript = javascript.replaceAll(`assets/${filename}`, dataUri);
});
javascript = javascript.replaceAll("</script", "<\\/script");

html = html
  .replace('<link rel="stylesheet" href="styles.css">', `<style>\n${css}\n</style>`)
  .replace(/\n\s*<script src="[^"]+"><\/script>/g, "")
  .replace("</body>", `<script>\n${javascript}\n</script>\n  </body>`);

fs.writeFileSync(outputPath, html);
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(pagesIndexPath, html);
fs.writeFileSync(path.join(outputDir, "manifest.webmanifest"), JSON.stringify(createManifest(), null, 2));
fs.writeFileSync(path.join(outputDir, "offline.html"), createOfflinePage());
fs.writeFileSync(path.join(outputDir, "sw.js"), createServiceWorker(html));
fs.writeFileSync(path.join(outputDir, ".nojekyll"), "");
console.log(outputPath);
console.log(pagesIndexPath);

function loadEnvFile(envPath) {
  if (!fs.existsSync(envPath)) return {};
  return fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .reduce((values, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) return values;
      const [key, ...rest] = trimmed.split("=");
      values[key.trim()] = rest.join("=").trim().replace(/^["']|["']$/g, "");
      return values;
    }, {});
}

function createManifest() {
  return {
    name: "Guitar Hero",
    short_name: "Guitar Hero",
    description: "Personal guitar songbook and practice academy.",
    start_url: ".",
    scope: ".",
    display: "standalone",
    background_color: "#f4f1ea",
    theme_color: "#f4f1ea",
    icons: [
      {
        src: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Crect width='512' height='512' rx='96' fill='%231e6f5c'/%3E%3Cpath d='M152 350c-24 0-44-20-44-44s20-44 44-44c10 0 19 3 27 9l62-62c-6-8-9-17-9-27 0-24 20-44 44-44s44 20 44 44c0 10-3 19-9 27l18 18c8-6 17-9 27-9 24 0 44 20 44 44s-20 44-44 44c-10 0-19-3-27-9l-18 18c6 8 9 17 9 27 0 24-20 44-44 44s-44-20-44-44c0-10 3-19 9-27l-62-62c-8 6-17 9-27 9Z' fill='%23fffdf8'/%3E%3C/svg%3E",
        sizes: "512x512",
        type: "image/svg+xml",
        purpose: "any"
      }
    ]
  };
}

function createOfflinePage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Guitar Hero Offline</title>
    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #f4f1ea;
        color: #191919;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        width: min(540px, calc(100% - 2rem));
        border: 1px solid #d7d0c4;
        border-radius: 8px;
        background: #fffdf8;
        padding: 1.5rem;
      }
      h1 { margin-top: 0; }
      p { color: #66635f; line-height: 1.5; }
    </style>
  </head>
  <body>
    <main>
      <h1>Guitar Hero is offline</h1>
      <p>The app shell should open offline after it has loaded once online. If you see this page, open Guitar Hero once while online, then try again.</p>
    </main>
  </body>
</html>
`;
}

function createServiceWorker(appHtml) {
  const cacheHash = crypto.createHash("sha256")
    .update(appHtml)
    .digest("hex")
    .slice(0, 12);
  const cacheName = `guitar-hero-${cacheHash}`;
  return `const CACHE_NAME = ${JSON.stringify(cacheName)};
const APP_SHELL = [
  "./",
  "./index.html",
  "./offline.html",
  "./manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((key) => key.startsWith("guitar-hero-") && key !== CACHE_NAME)
        .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html").then((response) => response || caches.match("./offline.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(request)
      .then((cached) => cached || fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => caches.match("./offline.html"))
      )
  );
});
`;
}
