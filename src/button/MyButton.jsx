
// like a build another button component that can be reused
// just pass the function as props
// and call the function in the onClick event
const MyButton = ({text, onSmash}) => {
    return (
        <button onClick={onSmash}>{text}</button>
    )
}

export default MyButton;