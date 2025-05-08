import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

// /tiles/* へのリクエストをoutputディレクトリから提供
app.get(
  "/tiles/*",
  serveStatic({
    root: "./output",
    rewriteRequestPath: (path) => path.replace(/^\/tiles/, ""),
  })
);

// publicディレクトリのコンテンツをルートパスで提供
app.get(
  "/*",
  serveStatic({
    root: "./public",
  })
);

export default app;
