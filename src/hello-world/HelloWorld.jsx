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
        <h1>{header.toUpperCase()}</h1>
    )
}

const Paragraph = () => {
    const paragraph = "I am learning React"
    return (
        <p>{paragraph.toLowerCase()}</p>
    )
}



export default HelloWorld;