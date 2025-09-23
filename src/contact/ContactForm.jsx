import { useState } from "react";

const contactForm = () => {
    const [contact, setContact] = useState({
        nama: "",
        massage: ""
    })

    const handlerNameUser = (e) => {
        setContact({...contact, nama: e.target.value})
    }

    const handlerMassageUser = (e) => {
        setContact({...contact, massage: e.target.value})
    }

    return (
        <>
            <h1> Form User</h1>
            <input type="text" placeholder="nama" value={contact.nama} onChange={handlerNameUser} />
            <br />
            <input type="text" placeholder="massage" value={contact.massage} onChange={handlerMassageUser} />

            <h1>Contact Detail</h1>
            <p>nama: {contact.nama}</p>
            <p>massage: {contact.massage}</p>
        </>
    )
}


export default contactForm;