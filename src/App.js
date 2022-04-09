import {Posts, UserDetails, Users} from "./components";
import {useState} from "react";

function App() {
    const [user, setUser] = useState(null);
    const [userIdPosts, setUserIdPosts] = useState(null);
    return (
        <div>
            <div>
                <Users setUser={setUser}/>
                {user &&<UserDetails user={user} setUserIdPosts={setUserIdPosts} userIdPosts={userIdPosts}/>}
            </div>
            {userIdPosts && <Posts userId={userIdPosts}/>}
        </div>
    );
}

export default App;
