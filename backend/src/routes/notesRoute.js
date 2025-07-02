import { Router } from "express";
import {
  createNote,
  deleteNote,
  getAllNote,
  getSingleNote,
  updateNote,
} from "../controllers/notesController.js";

const router = Router();

router.get("/", getAllNote);
router.get("/:id", getSingleNote);
router.post("/", createNote);
router.delete("/:id", deleteNote);
router.put("/:id", updateNote);

export default router;
