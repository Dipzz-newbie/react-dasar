

const ProfileForm = ({name, setName}) => {

    const handleChange = (e) => {
        setName(e.target.value)
    }

    return(
        <>
        <h1>form profile</h1>
        <input type="text" value={name} onChange={handleChange} />
        </>
    )
}

export default ProfileForm; 