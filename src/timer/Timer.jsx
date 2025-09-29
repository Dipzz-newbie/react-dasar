import { useRef, useState } from "react";



const Timer = () => {

    const [start, setStart] = useState(null)
    const [now, setNow] = useState(null)
    const timer = useRef(null)

    const handleStart = () => {
        setStart(Date.now())
        setNow(Date.now())

        timer.current = setInterval(() => {
            setNow(new Date().getTime())
        }, 10)
    }

    const handleStop = () => {
        clearInterval(timer.current)
    }

    return(
        <>
            <h1>Time : {now - start} ms</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </>
    )
}

export default Timer;