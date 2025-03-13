import React from "react";

function Note({ note, onDelete }) {
    const formatedDate = new Date(note.created_at).toLocaleDateString('en-US')
  return (
    <div>
      <p>{note.title}</p>
      <p>{note.content}</p>
      <p>{formatedDate}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}
export default Note