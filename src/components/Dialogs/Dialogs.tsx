import React from "react";
import k from './Dialogs.module.css';

import DialogsItems from "./DialogsItem/DialogsItem";
import Messages from "./Message/Message";
import {DialogsPageType} from "../../redux/state";


const Dialogs = (props:DialogsPageType) => {
    console.log(props, 'props');


    let dialogsElements = props.dialogs.map(d => <DialogsItems name={d.name} id={d.id}/>);

    let newMessage = React.createRef();

/*    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }*/

    let messagesElements = props.messages.map(m => <Messages message={m.message} id={m.id}/>);

    return (
        <div className={k.dialogs}>
            <div className={k.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={k.messages}>
                {messagesElements}
            </div>
            <textarea>Write your message</textarea>
            <button>Send</button>
        </div>
    )

}

export default Dialogs;