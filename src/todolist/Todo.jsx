const Todo = ({text, isComplated, isDeleted}) => {
    if(isDeleted) {
        return null
    }else {
        return (
            <>
                {/* tenary operator */}
                {/* <li>{isComplated ? <del>{text}</del> : text}</li> */}
                <li>{text} {isComplated && '✅'}</li>
            </>
        )
    }

}

export default Todo;    