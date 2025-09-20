import Todo from "./Todo";

const TodoList = () => {
    return (
        <>
            <ul>
            <Todo text="Belajar React" isComplated={false} />
            <Todo text="Belajar JavaScript" isComplated={true} isDeleted={true}/>
            <Todo text="Belajar HTML" isComplated={true}/>
            <Todo text="Belajar CSS" isComplated={true}/>
            <Todo text="Belajar Typescript" isComplated={false}/>
            </ul>
        </>
    )
}

export default TodoList;