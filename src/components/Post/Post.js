import React from 'react';

export const Post = ({ post }) => {
    return (
        <div>
            <hr/>
            <div>Id: {post.id}:</div>
            <div>title: {post.title}</div>
            <div>Body: {post.body}</div>
            <hr/>
        </div>
    );
};

