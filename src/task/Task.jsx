import { useState } from "react";
import { useImmer } from "use-immer";


const Task = () => {
    const [item, setItem] = useState("")
    const [items, setItems] = useImmer([])

    const handleChange = (e) => {
        setItem(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        setItems((items) => void(items.push(item)))
        setItem("")
    }

    return(
        <div>
            <h1>Create Task</h1>
            <form action="">
                <input type="text" placeholder="Task" value={item} onChange={handleChange} />
                <button type="submit" onClick={handleClick}>Add</button>
            </form>

            <h1>List Task</h1>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Task;