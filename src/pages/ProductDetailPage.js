import React, {useEffect, useState} from 'react'
import axios from 'axios'
import NavBar from '../components/NavBar'
import ProductDetail from '../components/product/ProductDetail'
import {Container, Grid, Paper, List, ListItem, ListItemText} from '@material-ui/core'
import Axios from 'axios'


const ProductDetailPage =(props)=>{

    const [product, setProduct] = useState(null)

    const fetchProductDetail = ()=>{
        // console.info(props)
        const url = `http://localhost:3000/books/${props.match.params.id}`
        axios.get(url).then((res)=>{
            if(res.status==200){
                setProduct(res.data.book)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    

    useEffect(()=>{
        fetchProductDetail()
    },[])

    return(
        <>
            <NavBar/>
            <div style={{paddingTop:65}}></div>
            <Container>
                <ProductDetail product={product}/>
            </Container>
        </>
    )
}

export default ProductDetailPage