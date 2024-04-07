const ProfilePicture = ({profilePicture, onChangePicture}) => {
    return (
        <div className="image-container">
            {profilePicture ? (
                <img src={profilePicture} alt="Profile Picture" className="profile-picture" />
            ) : (
                <div className="image-placeholder"></div>
            )}
            <div className='input-container'>
                <input 
                    id='picture'
                    name='picture'
                    type='file' 
                    required={true}
                    accept={"image/*"}
                    onChange={onChangePicture}
                />
            </div>
        </div>
    );
};

export default ProfilePicture;