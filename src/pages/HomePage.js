import React,{useEffect, useState} from 'react'
// import NavBar from './';
import axios from 'axios'
import NavBar from '../components/NavBar'
import ProductList from '../components/product/ProductList'
// import BannerCarousel from './components/BannerCarousel'
// import SingleLineGridList from './components/SingleLineGridList'
import {Container, Grid, Paper, List, ListItem, ListItemText} from '@material-ui/core'
// import ClippedDrawer from './components/ClippedDrawer'


const HomePage =()=>{

    const [products, setProducts] = useState(null)

    const fecthProducts = ()=>{
        const url = 'http://localhost/lararest/public/api/00000/products'
        axios.get(url).then((res)=>{
            if(res.status==200){
                console.log(res.data.data)
                console.log(products)
                setProducts(res.data.data)
            }
        }).catch((err)=>{
            console.error(err)
        })
    }

    useEffect(()=>{
        fecthProducts()
    },[])

    return(
        <>
            <NavBar/>
            <div style={{paddingTop:50}}></div>
            <Container>
                {/* <BannerCarousel/> */}
                <ProductList products={products}/>
            </Container>
        </>
    )
}

export default HomePage