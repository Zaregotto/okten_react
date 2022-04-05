import React from 'react';

const Comment = ({id, name, email, body}) => {
    return (
        <div>
            {id} --- {name} --- {email} ---- {body}
        </div>
    );
};

export default Comment;
