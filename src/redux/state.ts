

export type MessagesType = {
    id:number,
    message:string
}
export type  DialogsType ={
    id:number,
    name:string
}
type PostsType = {
    id: number,
    message: string,
    likescount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type RootStateType = {
    profilePage: ProfilePageType,
    dialogsPage: DialogsPageType
}

let state: RootStateType = {
    profilePage :{
        posts :[
            {message:'Hi everyone' , likescount: 65, id:1},
            {message:"It's me, i'm fine. What about you?" , likescount:33, id:2}
        ]
    },
    dialogsPage : {
        dialogs: [
            {id: 1, name: "Sasha",},
            {id: 2, name: "Sanya",},
            {id: 3, name: "Kate",},
        ],
        messages : [
            {id:1, message:"Hi"},
            {id:2, message:"How are u?"},
            {id:3, message:"Hello"},
        ]

    },

}

/*
export let addPost = (postMessage) => {
    debugger;
    let newPost = ({
        message: postMessage,
        likecount: 0,
        id:0
    });
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}
*/

export default state;