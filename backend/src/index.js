import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import noteRouter from "./routes/notesRoute.js";
import { connectDB } from "./utils/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// app.use(rateLimiter);

app.use("/api/notes", noteRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
});
