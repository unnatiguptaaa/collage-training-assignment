import { useState, useEffect } from "react";

function App() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // TODO 3: Fetch all notes
  const fetchNotes = async () => {
    const response = await fetch("http://localhost:5000/api/notes");
    const data = await response.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // TODO 4: Add Note
  const handleAddNote = async () => {
    await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    setTitle("");
    setContent("");
    fetchNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>MicroNotes</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <br />
      <br />

      <button onClick={handleAddNote}>Add Note</button>

      <hr />

      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <b>{note.title}</b> : {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;