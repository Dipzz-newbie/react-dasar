import { useContext, useMemo, useRef, useState } from "react";
import Note from "./Note";
import { ValueContext } from "./NotesContext";

const NoteList = () => {
    const notes = useContext(ValueContext);
    const [search, setSearch] = useState('');
    const searchInput = useRef(null)

    const filteredNotes = useMemo(() => {
        return notes.filter(note => note.text.includes(search))
    }, [notes, search])

    const handleSearch = () => {
        setSearch(searchInput.current.value)
    }

    return (
        <div>
            <input ref={searchInput} placeholder="Search" />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {filteredNotes.map(note => (
                    <li key={note.id}>
                        <Note note={note} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoteList;
