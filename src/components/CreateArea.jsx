import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const [isExpanded, setExpanded] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  function handleHidden() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          style={{ display: isExpanded ? "block" : "none" , fontWeight:"600"}}
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Judul"
        />
        <textarea
          onClick={handleHidden}
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Buat catatan..."
          rows={isExpanded ? "3" : "1"}
        />
        <Zoom in={isExpanded ? true : false}>
          <Fab onClick={submitNote}>
            <AddIcon style={{ position: "relative", top: "1px" }} />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
