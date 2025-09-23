import { useImmer } from "use-immer";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";


const Task = () => {
    const [items, setItems] = useImmer([])

    const handleSubmit = (item) => {
        if (item.trim() !== "") {
            setItems((draft) => {
                draft.push(item);
            });
        }
    };

    return(
        <>
            <TaskForm onSubmit={handleSubmit}/>
            <TaskList items={items}/>
        </>
    )
}

export default Task;