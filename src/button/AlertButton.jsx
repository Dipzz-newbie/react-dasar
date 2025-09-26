// ref https://react.dev/learn/responding-to-events

import { useRef } from "react";

const AlertButton = ({text, massage}) => {

    const counter = useRef(0)
    const handleClick = (e) => {
        console.log(e)
        alert(`${massage} : ${counter.current++}`);
    };

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default AlertButton;