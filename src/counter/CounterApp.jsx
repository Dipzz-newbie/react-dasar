import { useState } from "react"
import Counter from "./Counter"

const CounterApp = () => {
    const [show2, isShow2] = useState(true)

    const handleChange = (e) => {
        isShow2(e.target.value)
    }

    return(
        <>
        <Counter/>
        {show2 && <Counter/>}

        <input type="checkbox" checked={show2} onChange={handleChange} />
        </>
    )
}

export default CounterApp;