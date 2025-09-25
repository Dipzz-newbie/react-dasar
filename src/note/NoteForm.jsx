import { useState } from "react";


const NoteForm = ({addValue}) => {

    const [text , setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
    if (text.trim() === "") return;
    addValue(text);
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