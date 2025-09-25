import { useState } from "react";


const NoteForm = ({addValue}) => {

    const [value , setValue] = useState("")

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleClick = () => {
        addValue(value)
        setValue("")
    }


    return(
        <>
            <input type="text" onChange={handleChange} placeholder="Input text here!" />
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default NoteForm;