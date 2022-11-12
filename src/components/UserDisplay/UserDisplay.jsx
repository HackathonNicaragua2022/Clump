import './UserDisplay.css';

const UserDisplay = ({ username, role, profilePicture, ...props }) => {
    
    const picture = (profilePicture) 
        ? <img src={profilePicture.src} alt={profilePicture.alt} /> 
        : <div className="profile-picture" >
            <p>{username[0]}</p>
        </div>;

    return <div className="user-display" {...props}>
        {picture}
        <div className="user-data">
            <p className="username">{username}</p>
            <p className="role">{role}</p>
        </div>
    </div>;
};

export default UserDisplay;