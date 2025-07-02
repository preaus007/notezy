import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import path from "path";

import noteRouter from "./routes/notesRoute.js";
import { connectDB } from "./utils/db.js";

const __dirname = path.resolve();

const PORT = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}
app.use(express.json());

app.use("/api/notes", noteRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
