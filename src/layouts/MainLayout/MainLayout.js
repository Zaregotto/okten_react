import React from 'react';
import css from './MainLayout.module.css'
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/posts">Posts</a>
                <a href="/about">About</a>
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
