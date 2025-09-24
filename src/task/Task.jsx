import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


const Task = () => {
    const [items, setItems] = useImmer([])

    return(
        <>
            <TaskForm setItems={setItems}/>
            <TaskList items={items}/>
        </>
    )
}

export default Task;