const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({
  static: "./public",
});

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get("/api", (req, res) => {
  res.json({ message: "API is running!" });
});

// Use default router
server.use("/api", router);

// Start server
const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
