import { useContext, useState } from "react"
import { NotesDispatchContext } from "./NotesContext";


const Note = ({note}) => {
    const [isEditing, setIsEditing] = useState(false)
    const dispatch = useContext(NotesDispatchContext)
    let component;
    const handleChangeText = (e) => {
        dispatch({
            ...note,
            type: "CHANGE_Note",
            text: e.value.target
        })
    }

    if(isEditing) {
        component = (
            <>
                <input type="text" placeholder="input" onChange={handleChangeText} value={note.text}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    } else {
        component = (
            <>
                {note.text}
                <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
        )
    }

    const handleCheckDone = (e) => {
        dispatch({
            ...note,
            type: "CHANGE_Note",
            done: e.target.checked
        })
    }

    const handleDelete = () => {
        dispatch({
            type: "DELETE_Note",
            id: note.id
        })
    }

    return(
        <>
            <input type="checkbox" checked={note.done} onChange={handleCheckDone}/>
            {component}
            <button onClick={handleDelete}>Delete</button>
        </> 
    )
}

export default Note;