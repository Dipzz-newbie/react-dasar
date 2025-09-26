import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NotesContext";


const NoteForm = () => {

    const [text , setText] = useState("")
    const dispatch = useContext(NotesDispatchContext)

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
    dispatch({
        type: "ADD_Note",
        text: text
    })
    setText("");
    };

    return(
        <>
            <input type="text" value={text} onChange={handleChange} placeholder="Input text here!" />
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default NoteForm;