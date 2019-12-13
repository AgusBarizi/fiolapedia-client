import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
// import { getJwt } from '../helpers/utils';

const AuthComponent  = props => {

    const [user, setUser] = useState(undefined)

    const getJwt = ()=>{
        return localStorage.getItem('fiolapedia-jwt-token');
    }

    const getUser = () =>{
        const jwt = getJwt();
        console.log("JWT : ")
        console.log(jwt)
        if (!jwt) {
            console.log("jwt null")
            setUser(null)
            return;
        }

        console.log("fetch user")
        axios.get('/auth/getUser', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => {
            // setUser(res.data)
        }).catch((err)=>{
            setUser(null)
        });
    }

    useEffect(()=>{
        getUser()

        return
    },[])

    if (user === undefined) {
        return (<div></div>);
    }

    if (user === null) {

        console.log("redirect to login")
        // props.history.push('/login');
    }

    // return props.children;
    return(<><p>Authenticated</p></>)
}

export default withRouter(AuthComponent);