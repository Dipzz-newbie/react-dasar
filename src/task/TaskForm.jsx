    import { useState } from "react"


    const TaskForm = ({onSubmit}) => {
        const [item, setItem] = useState("")

        const handleChange = (e) => {
            setItem(e.target.value)
        }

        const handleClick = () => {
            onSubmit(item)
            setItem("")
        }

        return(
            <>
                <h1>Create Task</h1>
                <input type="text" value={item} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </>
        )
    }

    export default TaskForm;