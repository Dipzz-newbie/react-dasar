

const GuestBookMassage = ({massage, setMassage}) => {
    return(
        <>
            <label htmlFor="massage">Massage</label> <br/>
                <textarea name="massage" value={massage} onChange={(e) => {
                    setMassage(e.target.value)
                }}>Massage</textarea> <br/>
        </>
    )
}

export default GuestBookMassage;