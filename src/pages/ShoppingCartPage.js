import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import ShoppingCart from '../components/ShoppingCart'
import {Container, Grid, Paper, List, ListItem, ListItemText, IconButton} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Axios from 'axios'



const ShoppingCartPage =(props)=>{

    

    const [cartItems, setCartItems] = useState(null)

    const fetchShoppingCart = ()=>{
        console.info(props)
        const user_id = 1
        const url = `http://localhost/lararest/public/api/00000/cart/get_items?user_id=${user_id}`
        axios.get(url).then((res)=>{
            console.info(res)
            if(res.status==200){
                setCartItems(res.data.data)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        fetchShoppingCart()
    },[])

    return(
        <>
            <NavBar/>
            <div style={{paddingTop:65}}></div>
            <Container>
                <ShoppingCart cartItems={cartItems}/>
            </Container>
        </>
    )
}

export default ShoppingCartPage