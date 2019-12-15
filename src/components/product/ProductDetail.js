import React,{useState, useEffect} from 'react'
import {useHistory} from 'react-router'
import axios from 'axios'
import {Grid, Container, Card, CardMedia, Typography, Button,TextField } from '@material-ui/core'
import './product.scss'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductDetail = ({product})=>{
    let history = useHistory()
    const [qty, setQty] = useState(1)
    const [transactionId, setTransactionId] = useState('')

    const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : null;

    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: userData ? userData.token : '',
    }


    

    const addToCart = async()=>{

        if(!userData){
            history.push('/login')
        }

        if(isNaN(qty)){
            alert('Qty Produk minimal 1')
            return;
        }
        // console.log(qty)
        // getTransactionId()

        // console.log("ngecek")
        if(transactionId==null||transactionId==""||transactionId==undefined){
            alert("Gagal")
            return
        }


        const url = `http://localhost:3000/transactionsInsert`
        axios.post(url, {trans_id:transactionId, book_id:product._id, qty:qty, price:product.price, subtotal:qty*product.price, title:product.title}).then((res)=>{
            if(res.status==200){
                // alert('Data berhasil ditambahkan ke keranjang')
                history.push('/shopping_cart')
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    //, 
    const getTransactionId=()=>{

        const url = `http://localhost:3000/transaction/open`
        axios.get(url).then((res)=>{
            if(res.status==200){
                // alert('Data berhasil ditambahkan ke keranjang')
                console.log("tr_id : "+res.data.trans._id)
                setTransactionId(res.data.trans._id)
            }
        }).catch((err)=>{
            console.log(err)
            createTransaction()
        })
    }

    const createTransaction=()=>{

        // const userData = window.localStorage.getItem("userData")
        // ? JSON.parse(window.localStorage.getItem("userData"))
        // : null;

        // console.info(userData)

        const url = `http://localhost:3000/transaction/open`
        axios.post(url,{user_id:userData?userData.user._id:''}).then((res)=>{
            if(res.status==200){
                setTransactionId(res.data)                
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getTransactionId() 
    },[])
    
    return(
        <>
            {product ? (
                <>
                    <Grid cointainer style={{paddingRight:24, paddingLeft:24, paddingTop:24, display:'flex'}}>
                        <Grid item xs={6} sm={4} md={3} lg={4} xl={2}>
                            <Card>
                                <CardMedia 
                                    style={{ height: 0, paddingTop: "100%" }}
                                    image={product.description}
                                    title={product.title}
                                />
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={4} md={9} lg={8} xl={2} style={{paddingLeft:24}}>

                            <Typography component="h4" variant="h4" style={{fontWeight:600, marginBottom:15}} align="left">
                                {product.title}
                            </Typography>
                            <hr/>
                            <Typography component="h5" variant="h5" color="error" align="left" style={{marginBottom:5, fontWeight:600}}>
                                Rp. {product.price}
                            </Typography>
                           

                            <Grid 
                                container
                                justify="space-between"
                                style={{marginBottom:10}}
                            >
                                <Grid item xs={6}>
                                    <ul style={{marginBottom:"unset"}} className="no-style" align="left">
                                        <li className="mb-10"><span className="fw-semibold">Penerbit</span> : <span>{product.publisher}</span></li>  
                                        <li className="mb-10"><span className="fw-semibold">Penulis</span> : <span>{product.writer}</span></li>  
                                    </ul>
                                </Grid>
                                <Grid item xs={6}>
                                    <ul style={{marginBottom:"unset"}} className="no-style" align="left">
                                        <li className="mb-10"><span className="fw-semibold">Kategori</span> : <span>{product.category}</span></li>  
                                        <li className="mb-10"><span className="fw-semibold">Berat</span> : <span>{product.weight} gram</span></li>  
                                    </ul>
                                </Grid>

                            </Grid>
                            <Typography component="p" align="left" style={{marginBottom:10}}>
                            {product.description}
                            </Typography>

                            <Typography component="p" align="left" style={{marginBottom:10}}>
                                Tersedia <span className="primary-color fw-bold">{product.qty}</span> Barang
                            </Typography>
                            
                            <Grid 
                                container
                                justify="space-between"
                                style={{marginBottom:10}}
                            >
                            <Grid item>
                                    <TextField
                                        // align="left"
                                        label="Masukkan Jumlah Beli"
                                        type="number"
                                        style={{width:200}}
                                        inputProps={{ min: "0", max: product.stock, step: "1" }} 
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={qty}
                                        onChange={e=>setQty(e.target.value)}
                                    />
                                </Grid>
                            </Grid>

                            <Grid 
                                container
                                justify="space-between"
                            >
                                

                                <Grid>
                                    <Button
                                        align="left"
                                        variant="contained"
                                        color="primary"
                                        href="#"
                                        onClick={addToCart}
                                        startIcon={<AddShoppingCartIcon />}
                                    >
                                        Tambah ke Keranjang
                                    </Button>
                                </Grid>
                            </Grid>


                        </Grid>
                    </Grid>
                </>
            ):null}
        </>
    )
}

export default ProductDetail