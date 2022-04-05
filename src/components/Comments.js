import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComents] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComents(value))
    }, []);

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} name={comment.name} id={comment.id} body={comment.body} email={comment.email}/>)}
        </div>
    );
};

export default Comments;
