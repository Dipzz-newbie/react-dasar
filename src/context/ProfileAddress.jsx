import { useContext } from "react";
import { profileContext } from "./ProfileContext";


const ProfileAddress = () => {

    const profile = useContext(profileContext)

    return(
        <>
        <h1>Profile Addreses</h1>
        <p>Alamat : {profile} </p>
        </>
    )
}

export default ProfileAddress;