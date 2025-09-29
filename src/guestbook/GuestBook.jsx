import { useRef, useState } from "react";


const GuestBook = () => {

    const [name, setName] = useState("")
    const [massage, setMassage] = useState("")

    const nameInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setMassage("")

        nameInput.current.focus();

        alert(`Name : ${name} Massage : ${massage}`)
    }

    return(
        <>
            <h1>GuestBook</h1>
            <form>
                <label htmlFor="name">Name</label> <br/>
                <input ref={nameInput} type="text" name="name" value={name} onChange={(e) => {
                    setName(e.target.value)
                }} /> <br/>

                <label htmlFor="massage">Massage</label> <br/>
                <textarea name="massage" value={massage} onChange={(e) => {
                    setMassage(e.target.value)
                }}>Massage</textarea> <br/>
                <button onClick={handleSubmit}>Submit</button>

            </form>
        </>
    )
}

export default GuestBook;