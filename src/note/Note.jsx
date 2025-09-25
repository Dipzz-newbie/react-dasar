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
                <input type="text" placeholder="input" onChange={handleChangeText}/>
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        )
    }
}