import React, {Component} from 'react';
import CircleAvatar from './CircleAvatar.js';

function MyListItem(props){
    return <h1 style={{display:'flex'}}><CircleAvatar style={{flex:'1'}} url={props.photo}/> <span style={{flex:'1'}}>{props.name}</span></h1>  
}

export default MyListItem