import { useState } from "react"

const Counter = ({text}) => {
    let [count, setCount] = useState(0) // useState is a hook that returns an array with two elements, the first is the current state, the second is a function to update the state
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={(e) => {
                setCount(count + 3)
            }}>{text}</button>
        </>
        
    )
}

export default Counter;