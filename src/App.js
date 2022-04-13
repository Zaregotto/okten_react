import styles from './App.module.css'
import {Posts, UserDetails, Users} from "./components";
import {useState} from "react";


function App() {
    const [user, setUser] = useState(null);
    const [userIdPosts, setUserIdPosts] = useState(null);
    return (
        <div>
            <div className={styles.usersAndDetails}>
                <Users setUser={setUser} setUserIdPosts={setUserIdPosts}/>
                {user && <UserDetails user={user} setUserIdPosts={setUserIdPosts}/>}
            </div>
            {userIdPosts && <Posts userId={userIdPosts}/>}
        </div>
    );
}

export default App;
