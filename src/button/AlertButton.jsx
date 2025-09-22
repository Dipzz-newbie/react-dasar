// ref https://react.dev/learn/responding-to-events

const AlertButton = ({text, massage}) => {
    const handleClick = () => {
        alert(massage);
    };

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default AlertButton;