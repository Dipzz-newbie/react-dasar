import "./helloworld.css"

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
        <h1 className="title">{text.toUpperCase()}</h1>
    )
}

const Paragraph = () => {
    const paragraph = "I am learning React"
    return (
        <p className="paragraph">{paragraph.toLowerCase()}</p>
    )
}



export default HelloWorld;