import Note from "../models/Note.js";

export async function getAllNote(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, notes });
  } catch (error) {
    console.log("Erron in getAllNote");
    res.status(500).json({ message: "Internal server error!" });
  }
}

export async function getSingleNote(req, res) {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ success: true, note });
  } catch (error) {
    console.log("Error in getSingleNote:", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;

    if (!title) {
      return res
        .status(400)
        .json({ success: false, message: "Title is required" });
    }

    const note = new Note({ title, content });
    await note.save();

    res
      .status(201)
      .json({ success: true, message: "Note created successfully", note });
  } catch (error) {
    console.log("Error in createNote:", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote) {
      res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ success: true, updatedNote });
  } catch (error) {
    console.log("Error in updateNote:", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
}

export async function deleteNote(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      res.status(404).json({ message: "Note not found!" });
    }

    res.status(200).json({ success: true, message: "Deleted Successfully!" });
  } catch (error) {
    console.log("Error in deleteNote:", error.message);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
}
