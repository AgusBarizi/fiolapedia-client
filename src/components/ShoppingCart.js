import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Avatar, Typography, IconButton,Grid, AlertDialog, Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });
  
  
  

const ShoppingCart = ()=>{

    const classes = useStyles();
    

    const [showAlertDialog, setShowAlertDialog] = useState(false)
    const [cartItems, setCartItems] = useState(null)
    const [totalPrice, setTotalPrice] = useState(0)
    const [transaction, setTransaction] = useState(null)
    let total = 0


    const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : null;

    
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: userData ? userData.token : '',
    }

    

    const fetchShoppingCart = ()=>{
        // console.info(props)
        const user_id = 1
        const url = `http://localhost/lararest/public/api/00000/cart/get_items?user_id=${user_id}`
        axios.get(url).then((res)=>{
            console.info(res)
            if(res.status==200){
                setTransaction(res.data.trans)

                
                
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    const fetchTransactionOpen = ()=>{
        const url = `http://localhost:3000/transaction/open`
        axios.get(url).then((res)=>{
            console.info(res)
            if(res.status==200){
                console.log('sukses 200')
                setTransaction(res.data.trans)
            }
        }).catch((err)=>{
            fetchOpenCart()
            console.log('error')
            console.log(err)
        })
    }

    const fetchOpenCart = ()=>{
        const user_id = userData ? userData.user._id : ''
        const url = `http://localhost:3000/transaction/open`
        axios.post(url, {user_id}).then((res)=>{
            console.info(res)
            if(res.status==200){
                // setTransactionId(res.data)
                fetchTransactionOpen()
            }
        }).catch((err)=>{
            console.log(err)
        })
    }



    const deleteCartItemHandler = (cartItemId)=>{
        if(window.confirm('Apakah Anda Yakin mau menghapus barang ini dari keranjang')){
            const url = 'http://localhost/lararest/public/api/00000/cart/delete_item'
            axios.post(url, {id:cartItemId}).then((res)=>{
                if(res.status==200){
                    fetchShoppingCart()
                }
            }).catch((err)=>{
                alert('Oops.. Terjadi Kesalahan')
            })
        }
        
    }

    useEffect(()=>{
        fetchTransactionOpen()
    },[])

    console.log(cartItems)
    return(
        <>
            <Typography component="h5" style={{marginTop:15, marginBottom:15}} variant="h5">
                Keranjang Belanja
            </Typography>

            <Paper className={classes.root}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell width={50}>No</TableCell>
                        <TableCell align="left">Produk</TableCell>
                        <TableCell align="center">Qty</TableCell>
                        <TableCell align="right">Harga Satuan</TableCell>
                        <TableCell align="right">Sub Total</TableCell>
                        <TableCell align="right">#</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {transaction && transaction.items.length>0? ( 
                            transaction.items.map((item,index) => {
                                // setTotalPrice(100)
                                total+=item.subtotal
                                console.log('a')
                                return (
                                <TableRow key={item._id}>
                                    <TableCell component="th" scope="row">
                                        {++index}
                                    </TableCell>
                                    <TableCell align="left">
                                        {/* <Avatar style={{verticalAlign:'middle', display:'inline-block'}} alt="Img" src={item.get_product.image} /> */}
                                        <p style={{verticalAlign:'middle', margin:'unset', paddingLeft:10, display:'inline-block'}}>{item.title}</p>
                                    </TableCell>
                                    <TableCell align="center">{item.qty}</TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.subtotal}</TableCell>
                                    <TableCell align="right">
                                        <IconButton aria-label="delete" className={classes.margin} onClick={()=>deleteCartItemHandler(item._id)}>
                                            <DeleteIcon fontSize="small" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                )
                            })
                            
                        ):(
                            <TableRow key={'0'}>
                                <TableCell component="th" colspan={6} scope="row">Keranjang Belanja Masih Kosong</TableCell>
                            </TableRow>
                            
                        )}
                        <TableRow>
                                <TableCell colSpan={4}>Total</TableCell>
                                <TableCell align="right">{total}</TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                    </TableBody>
                </Table>

            </Paper>
            <Grid container justify="right">
                <Grid item align="right"><Button style={{marginTop:24}} variant="contained" color="primary">Checkout</Button></Grid>
            </Grid>
            


            {/* <AlertDialog title="Hapus Item"  description="Apakah Anda yakin menghapus barang ini dari keranjang?" onConfirm={console.log('confirm')} /> */}
        </>
    )
}

export default ShoppingCart