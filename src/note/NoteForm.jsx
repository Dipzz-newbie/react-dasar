import { useState } from "react";


const NoteForm = ({addValue}) => {

    const [text , setText] = useState("")

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = () => {
        addValue(value)
        setText("")
    }


    return(
        <>
            <input type="text" onChange={handleChange} placeholder="Input text here!" value={text} />
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default NoteForm;