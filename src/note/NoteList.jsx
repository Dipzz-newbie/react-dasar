import { useContext } from "react";
import Note from "./Note";
import { ValueContext } from "./NotesContext";

const NoteList = () => {
    const notes = useContext(ValueContext);

    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    <Note note={note} />
                </li>
            ))}
        </ul>
    );
};

export default NoteList;
