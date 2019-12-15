import React,{useEffect, useState} from 'react'
import {Select,FormControl, InputLabel} from '@material-ui/core'
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios'


const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      display:'flex',
      width:200,
      float:'right',
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

const FilterCategory = ({onChange, category})=>{

    const classes = useStyles()
    // const [category, setCategory] = useState('Semua Kategori')
    const [categories, setCategories] = useState([])

    const fetchCategories=()=>{
        const url = `http://localhost:3000/categories`
        axios.get(url).then((res)=>{
            if(res.status==200){
                setCategories(res.data.categories)
            }
        }).catch((err)=>{
            console.error(err)
        })
    }

    // const changeCategoryHandler = ()=>{
    //     e=>setCategory(e.target.value)
    //     onChange()
    // }

    useEffect(()=>{
        fetchCategories()
    }, [])

    return(
        <>
            <FormControl className={classes.formControl} align="right">
                <InputLabel id="demo-simple-select-label">Filter Kategori</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    onChange={onChange}
                >

                    <MenuItem value={'Semua Kategori'}>Semua Kategori</MenuItem>
                    {
                        categories.map(category_value=>(
                            <MenuItem value={category_value}>{category_value}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>
    )
}

export default FilterCategory