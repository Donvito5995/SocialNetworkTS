import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import k  from './Profile.module.css';
import ProfilePage from './ProfilePage/ProfilePage';
import {ProfilePageType} from "../../redux/state";

const Profile = (props:ProfilePageType) => {



    return  <div className={k.content}>
        <ProfilePage />
        <MyPosts posts={props.posts} />
    </div>
}

export default Profile;