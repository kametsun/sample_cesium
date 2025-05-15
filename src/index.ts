import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use("*", logger());
app.use("/tiles/*", cors({ origin: "*" }));

app.get(
  "/tiles/*",
  serveStatic({
    root: "./output",
    rewriteRequestPath: (path) => path.replace(/^\/tiles/, ""),
  })
);

app.get(
  "/*",
  serveStatic({
    root: "./public",
  })
);

export default app;
