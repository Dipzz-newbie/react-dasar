import { useState } from "react"
import Counter from "./Counter"

const CounterApp = () => {
    const [show2, isShow2] = useState(true)

    const handleChange = (e) => {
        isShow2(e.target.checked)
    }

    return(
        <>
       
        {/* jika counter nya di nonaktifkan akan terjadi penghapusan ketika div atau penampungan nya di hilang kan (di reset state nya) */}
        {/* show2 && <Counter name="dipzz"/> */}     

        {/* akan mempertahankan state nya, tidak akan berubah value sebelum di ubah nama nya*/}
        {/* {show2 ?  <Counter name="dipzz"/> : <Counter name="Opponnent"/>} */}

        {/* {show2 ?  <Counter name="dipzz"/> : <Counter name="Opponnent"/>} */}

        {!show2 && <Counter name="2"/>}
        {show2 && <Counter name="1"/>}

        <input type="checkbox" checked={show2} onChange={handleChange} /> tampilkan counter 2
        </>
    )
}

export default CounterApp;