import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import ShoppingCart from '../components/ShoppingCart'
import {Container, Grid, Paper, List, ListItem, ListItemText, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Axios from 'axios'



const ShoppingCartPage =(props)=>{

    

    

    return(
        <>
            <NavBar/>
            <div style={{paddingTop:65}}></div>
            <Container>
                <ShoppingCart/>
            </Container>
        </>
    )
}

export default ShoppingCartPage