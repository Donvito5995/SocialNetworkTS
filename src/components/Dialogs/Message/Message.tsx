import React from "react";
import k from './../Dialogs.module.css';
import {MessagesType} from "../../../redux/state";

const Messages = (props:MessagesType)=>{
    return <div className={k.dialogs}>{props.message}</div>
}
export default Messages;