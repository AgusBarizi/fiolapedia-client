import React, {useState, useEffect} from 'react'
import {Container, Typography, Grid, Select,FormControl, InputLabel} from '@material-ui/core'
import NavBar from '../components/NavBar'
import ProductList from '../components/product/ProductList'
import axios from 'axios' 
import FilterCategory from '../components/product/FilterCategory';


  


const SearchResultPage = ({match})=>{

    // const [state , setState] = useState({
    //     filteredProducts : null,
    //     products:null,
    //     categorySelected:'Semua Kategori'
    // })
    
    const [products, setProducts] = useState(null)
    const [filteredProducts, setFilteredProducts] = useState(null)
    const [categorySelected, setCategorySelected] = useState('Semua Kategori')
    
    const keyword = match.params.keyword
  
    
    const fecthProducts = ()=>{
        const url = `http://localhost:3000/books?keyword=${keyword}`
        axios.get(url).then((res)=>{
            if(res.status==200){
                setProducts(res.data.books)
                setFilteredProducts(res.data.books)
                // setState(prevState=>({
                //     ...prevState,
                //     products:res.data.data,
                //     filteredProducts:res.data.data,
                // }))
            }
        }).catch((err)=>{
            console.error(err)
        })
    }

    const onCategoryChange = (e)=>{
        console.log(`changed ${e.target.value}`)
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
    },[keyword])

    return(
        <>
            <NavBar keywordString={decodeURIComponent(keyword)}/>
            <div style={{paddingTop:85}}></div>
            <Container>
                <Grid container style={{paddingLeft:24, paddingRight:24}} justify="space-between">
                    <Grid item xs={6}>
                        <Typography align="left" component="h3" variant="h5" style={{paddingTop:18}}>
                            Hasil Pencarian : {keyword}
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

export default SearchResultPage