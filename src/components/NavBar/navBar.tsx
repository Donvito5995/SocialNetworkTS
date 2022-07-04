import React from 'react';
import { NavLink } from 'react-router-dom';
import k from './navBar.module.css';

const NavBar = (props:any) => {
    return <nav className={k.nav}>
        <div className={k.item}>
             <a href="/profile">Profile</a>
           {/* <NavLink to='/profile' className = {navData => navData.isActive ? k.active : k.item}>Profile</NavLink>*/}
        </div>
        <div className={k.item}>
             <a href="/dialogs">Message</a>
            {/*<NavLink to='/dialogs' className = {navData => navData.isActive ? k.active : k.item}>Message</NavLink>*/}
        </div>
        <div className={k.item}>
            <a>News</a>
        </div>
        <div className={k.item}>
            <a>Music</a>
        </div>
        <div className={k.item}>
            <a>Settings</a>
        </div>
    </nav>
}

export default NavBar;