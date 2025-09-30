import useOnline from "./OnlineHooks";


const Online = () => {
    const isOnline = useOnline()
    return(
        <>
            Hello i'm {isOnline ? "Online" : "Offline"}
        </>
    )
}

export default Online;