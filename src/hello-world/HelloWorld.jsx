const HelloWorld = () => {
    return (
        <>
        <Header />
        <Paragraph />
        </>
    )
}

const Header = () => {
    const header = "Hello World"
    return (
        <h1 style={{
            color: "black",
            backgroundColor: "red"
        }}>{header.toUpperCase()}</h1>
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