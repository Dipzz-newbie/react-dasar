import { useRef, useState } from "react";
import GuestBookForm from "./GuestBookForm";
import GuestBookMassage from "./GuestBookMassage";


const GuestBook = () => {

    const [name, setName] = useState("")
    const [massage, setMassage] = useState("")

    const nameInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        setName("")
        setMassage("")

        nameInput.current.focus(); 

        alert(`Name : ${name} \nMassage : ${massage}`)
    }

    return(
        <>
            <h1>GuestBook</h1>
            <form>
                <GuestBookForm ref={nameInput} name={name} setName={setName}/>
                <GuestBookMassage massage={massage} setMassage={setMassage}/>
                <button onClick={handleSubmit}>Submit</button>

            </form>
        </>
    )
}

export default GuestBook;