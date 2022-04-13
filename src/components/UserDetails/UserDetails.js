export const UserDetails = ({ user, setUserIdPosts }) => {

    return (
        <div>
            <div>{user.id}. Name: {user.name} {user.username}</div>
            <div>Email: {user.email}</div>
            <div>Phone: {user.phone}</div>
            <div>Address: street:{user.address.street}.  Suite: {user.address.suite}.  City: {user.address.city}.</div>
            <div>Web site: {user.website}</div>
            <div>Company: {user.company.name}</div>
            <input type="button" value="show posts" onClick={() => setUserIdPosts(user.id)}/>
        </div>
    );
};