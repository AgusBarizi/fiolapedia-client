import React, {Component} from 'react';

function CircleAvatar(props){
    return(
      <img style={{ borderRadius:'50%', width:'50px', height:'50px' }} src={props.url}/>
    );
}

export default CircleAvatar
