    // it gonna be use in Task.jsx

const TaskList = ({items = []}) => {
    return (
        <>
            <h1>List Task</h1>
            <ul>{items.map((item, index) => <li key={index}>{item}</li>)}</ul>
        </>
    )
}

export default TaskList;