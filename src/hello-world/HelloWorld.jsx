const HelloWorld = () => {
    const props = {
        text: "Hello World"
    }
    return (
        <>
        <Header {...props} />
        <Paragraph />
        </>
    )
}

const Header = ({text = "Ups, Lupa Kasih teks"}) => {
    return (
        <h1 style={{
            color: "black",
            backgroundColor: "red"
        }}>{text.toUpperCase()}</h1>
    )
}

const Paragraph = () => {
    const paragraph = "I am learning React"
    const style = {
        color: "white",
        backgroundColor: "blue"
    }
    return (
        <p style={style}>{paragraph.toLowerCase()}</p>
    )
}



export default HelloWorld;