import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";


const Profile = () => {
    const profile = useContext(ProfileContext)
    return(
        <>
        <h1>Profile</h1>
        <p>hello {profile}</p>
        </>
    )
}

export default Profile;