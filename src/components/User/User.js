export const User = ({user, setUser, setUserIdPosts}) => {
    const click = () => {
        setUserIdPosts(false);
        setUser(user);
    }
    return (
        <div>
            {user.id} --- {user.name} ---- {user.username}
            <button onClick={click}>Get Details</button>
        </div>
    );
};