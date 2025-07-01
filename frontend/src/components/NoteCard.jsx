import React from "react";

const NoteCard = ({ note, setNotes }) => {
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteCard;
