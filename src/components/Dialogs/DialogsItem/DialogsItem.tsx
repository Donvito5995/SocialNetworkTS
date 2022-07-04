import React from "react";
import k from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";
import {DialogsType} from "../../../redux/state";

const DialogsItems = (props:DialogsType) =>{
    let path = "/dialogs/" + props.id;
    return  <div className={k.dialogs + '' + k.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}


export default DialogsItems;