import React, {useEffect, useState} from 'react';
import {usersService} from "../../services";
import {User} from "../User/User";

export const Users = ({setUser, setUserIdPosts}) => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <div>
                {users ? users.map(user => <User key={user.id} user={user} setUser={setUser} setUserIdPosts={setUserIdPosts}/>)
                : "LOADING..."}
            </div>
        </div>
    );
};

