import Todo from "./Todo";

const TodoList = () => {
    const data = [
        {text: "Belajar React", isComplated: false},
        {text: "Belajar JavaScript", isComplated: true},
        {text: "Belajar HTML", isComplated: true},
        {text: "Belajar CSS", isComplated: true},
        {text: "Belajar Typescript", isComplated: false},
    ]
    
    const todos = data.map((todo) => {
        return <Todo {...todo}/>
    })

    return (
        <>
            <ul>
            {/* <Todo text="Belajar React" isComplated={false} /> */}
            {/* <Todo text="Belajar JavaScript" isComplated={true}/> {/*>isDeleted={true}*/} 
            {/* <Todo text="Belajar HTML" isComplated={true}/> */}
            {/* <Todo text="Belajar CSS" isComplated={true}/> */}
            {/* <Todo text="Belajar Typescript" isComplated={false}/> */}
            {todos}

            </ul>
        </>
    )
}

export default TodoList;