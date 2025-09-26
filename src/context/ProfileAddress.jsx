import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";


const ProfileAddress = () => {

    const profile = useContext(ProfileContext)

    return(
        <>
        <h1>Profile Addreses</h1>
        <p>Alamat : {profile} </p>
        </>
    )
}

export default ProfileAddress;