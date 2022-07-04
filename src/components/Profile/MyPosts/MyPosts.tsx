import React from 'react';
import k from './MyPosts.module.css'
import Posts from './Posts/Posts';
import {ProfilePageType} from "../../../redux/state";


const MyPosts = (props:ProfilePageType) => {


    let Post = props.posts.map(p => <Posts key={p.id} message={p.message} likecount={p.likescount}/>)

 /*   let newPostElement = React.createRef();
    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPosts(text);
        newPostElement.current.value = '';

    };*/

    return (<>
            <div>My post</div>
            <textarea> </textarea>
            <button>Everyone waiting for this!</button>
            <div className={k.item}>
                {Post}
            </div>
        </>
    )
}

export default MyPosts;