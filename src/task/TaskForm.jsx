import { useState } from "react"


const TaskForm = ({onSubmit}) => {
    const [item, setItem] = useState("")

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleClick = () => {
        onSubmit((items) => items.push(item))
        setItem("")
    }

    return(
        <>
            <h1>Create Task</h1>
            <form action="">
                <input type="text" value={item} onChange={handleChange} />
                <button onClick={handleClick}></button>
            </form>
        </>
    )
}