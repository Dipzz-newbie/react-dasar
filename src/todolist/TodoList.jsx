import Todo from "./Todo";

const TodoList = () => {
    const data = [
        {   
            id: 1,
            text: "Belajar React", 
            isComplated: false
        },
        {
            id: 2,
            text: "Belajar JavaScript", 
            isComplated: true
        },
        {
            id: 3,
            text: "Belajar HTML", 
            isComplated: true
        },
        {
            id: 4,
            text: "Belajar CSS", 
            isComplated: true
        },
        {
            id: 5,
            text: "Belajar Typescript", 
            isComplated: false
        },
    ]

    // Alternative render dengan map membuat data variabel 
    // const todos = data.map((todo) => {
    //     return <Todo key={todo.id} {...todo}/>
    // })

    return (
        <>
            <ul>
            {/* <Todo text="Belajar React" isComplated={false} /> */}
            {/* <Todo text="Belajar JavaScript" isComplated={true}/> {/*>isDeleted={true}*/} 
            {/* <Todo text="Belajar HTML" isComplated={true}/> */}
            {/* <Todo text="Belajar CSS" isComplated={true}/> */}
            {/* <Todo text="Belajar Typescript" isComplated={false}/> */}
            {/* membuat data langsung di dalam react */}
            {data.map((todo) => (
                <Todo key={todo.id} {...todo}/>
            ))}

            </ul>
        </>
    )
}

export default TodoList;