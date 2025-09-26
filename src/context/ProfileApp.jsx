import Profile from "./Profile";
import ProfileAddress from "./ProfileAddress";
import { ProfileContext } from "./ProfileContext";


const ProfileApp = () => {

    return(
       <ProfileContext.Provider value="Dipzzz">
            <Profile/>
            <ProfileAddress/>
       </ProfileContext.Provider>
    )
}

export default ProfileApp;