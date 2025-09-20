const Todo = ({text, isComplated, isDeleted}) => {
    if(isDeleted) {
        null
    }
    else if (isComplated) {
        return (
            <li><del>{text}</del></li>
        )
    }else {
        return (
            <li>{text}</li>
        )
    }

}

export default Todo;    