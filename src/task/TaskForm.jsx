    // it gonna be use in Task.jsx
    
    import { useState } from "react"


    const TaskForm = ({setItems}) => {
        const [item, setItem] = useState("")

        const handleChange = (e) => {
            setItem(e.target.value)
        }

        const handleClick = () => {
            if (item.trim() !== "") {
            setItems((draft) => {
                draft.push(item);
            });
   }
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