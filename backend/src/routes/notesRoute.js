import { Router } from "express";
import {
  createNote,
  getAllNote,
  getSingleNote,
  updateNote,
} from "../controllers/notesController.js";

const router = Router();

router.get("/", getAllNote);
router.get("/:id", getSingleNote);
router.post("/", createNote);
router.delete("/:id", getAllNote);
router.put("/:id", updateNote);

export default router;
