import React, {useEffect, useState} from 'react';
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    }, []);

    return (
        <div>
            {posts.map(post => <Post key={post.id} title={post.title} id={post.id} body={post.body}/>)}
        </div>
    );
};

export default Posts;
