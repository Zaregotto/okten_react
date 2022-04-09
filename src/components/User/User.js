export const User = ({user, setUser}) => {
    return (
        <div>
            {user.id} --- {user.name} ---- {user.username}
            <button onClick={()=> setUser(user)}>Get Details</button>
        </div>
    );
};