import "dotenv/config";
import express from "express";
import logger from "morgan";
import cors from "cors";
import authRouter from "./router/api/auto-router.js";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "React app URL");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
//   res.header("Access-Control-Allow-Headers", "Content-Type");
//   next();
// });

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/users", authRouter);
// app.use("/contacts");

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

export default app;
