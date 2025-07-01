import express from "express";
import dotenv from "dotenv";
dotenv.config();

import noteRouter from "./routes/notesRoute.js";
import { connectDB } from "./utils/db.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use("/api/notes", noteRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
