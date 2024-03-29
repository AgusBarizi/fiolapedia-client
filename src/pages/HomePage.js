import React,{useEffect, useState} from 'react'
// import NavBar from './';
import axios from 'axios'
import NavBar from '../components/NavBar'
import ProductList from '../components/product/ProductList'
// import BannerCarousel from './components/BannerCarousel'
// import SingleLineGridList from './components/SingleLineGridList'
import {Container, Grid, Paper, List, ListItem, ListItemText, Typography} from '@material-ui/core'
// import ClippedDrawer from './components/ClippedDrawer'
import FilterCategory from '../components/product/FilterCategory'


const HomePage =()=>{

    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [categorySelected, setCategorySelected] = useState('Semua Kategori')

    const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : null;

    
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: userData ? userData.token : '',
    }

    const fecthProducts = ()=>{
        const url = 'http://localhost:3000/books'
        axios.get(url).then((res)=>{
            if(res.status==200){
                setProducts(res.data.books)
                setFilteredProducts(res.data.books)
            }
        }).catch((err)=>{
            console.error(err)
        })
    }

    const onCategoryChange = (e)=>{
        const filter = e.target.value
        setCategorySelected(filter)
        setFilteredProducts(
            products ? products.filter(product=>{ //return true
                if(filter=='Semua Kategori') return true
                return product.category.toLowerCase() == (filter.toLocaleLowerCase())
            }):null
        )
    }

    useEffect(()=>{
        fecthProducts()
    },[])

    return(
        <>
            <NavBar/>
            <div style={{paddingTop:85}}></div>
            <Container>
                {/* <Grid container style={{marginLeft:24}}>
                    <Grid item>
                        <Typography>
                            Semua Produk 
                        </Typography>
                    </Grid>
                    </Grid> */}
                <Grid container style={{paddingLeft:24, paddingRight:24}} justify="space-between">
                    <Grid item xs={6}>
                        <Typography align="left" component="h3" variant="h5" style={{paddingTop:18}}>
                            Semua Produk
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <FilterCategory category={categorySelected} onChange={onCategoryChange}/>
                    </Grid>
                </Grid>
                <ProductList products={filteredProducts}/>
            </Container>
        </>
    )
}

export default HomePage