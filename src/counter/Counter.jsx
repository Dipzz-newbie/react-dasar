import { useState } from "react";



const Counter = () => {

    const [count, setCount] = useState(0)

    const handleCounter = () => {
        setCount(count + 1)
    }
    
    return(
        <>
            <h1>Counter {count}</h1>
            <button onClick={handleCounter}>Increment +1</button>
        </>
    )
}

export default Counter;