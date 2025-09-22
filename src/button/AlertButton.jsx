// ref https://react.dev/learn/responding-to-events

const AlertButton = ({text}) => {
    const handleClick = () => {
        alert("Button clicked!");
    };

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default AlertButton;