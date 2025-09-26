import { useState } from "react";
import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";
import ProfileForm from "./ProfileForm";


const ProfileApp = () => {
    const [name, setName] = useState("Dipzz")
    return(
       <ProfileContext.Provider value={name}>
            <ProfileForm name={name} setName={setName}/>
            <Profile/>
            <ProfileAddress/>
       </ProfileContext.Provider>
    )
}

export default ProfileApp;