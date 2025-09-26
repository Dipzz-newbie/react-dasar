import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";

const Note = ({ note }) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useContext(NotesDispatchContext);

    const handleChangeText = (e) => {
        dispatch({
            type: "CHANGE_Note",
            note: {
                ...note,
                text: e.target.value
            }
        });
    };

    const handleCheckDone = (e) => {
        dispatch({
            type: "CHANGE_Note",
            note: {
                ...note,
                done: e.target.checked
            }
        });
    };

    const handleDelete = () => {
        dispatch({
            type: "DELETE_Note",
            id: note.id
        });
    };

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <>
            <input type="checkbox" checked={note.done} onChange={handleCheckDone} />
            {isEditing ? (
                <>
                    <input
                        type="text"
                        value={note.text}
                        onChange={handleChangeText}
                        placeholder="Edit note"
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    {note.text}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </>
            )}
            <button onClick={handleDelete}>Delete</button>
        </>
    );
};

export default Note;
