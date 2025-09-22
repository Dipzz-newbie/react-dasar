import { useState } from "react"

const Counter = ({text}) => {
    let [count, setCount] = useState(0)
    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={(e) => {
                setCount(count += 1)
            }}>{text}</button>
        </>
        
    )
}

export default Counter;