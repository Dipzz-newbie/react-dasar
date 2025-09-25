import { useState } from "react"


const Note = ({note, onChange, onDelete}) => {
    const [isEditing, setIsEditing] = useState(false)
    let component;
    const handleChangeText = (e) => {
        const newNote = {...note, text:e.target.value}
        onChange(newNote)
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
        const newNote = {...note, done:e.target.checked}
        onChange(newNote)
    }

    return(
        <>
            <input type="checkbox" checked={note.done} onChange={handleCheckDone}/>
            <button onClick={() => onDelete(note)}>Delete</button>
        </> 
    )
}