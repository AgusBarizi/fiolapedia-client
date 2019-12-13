import React from 'react'
import {Grid, Container, Card, CardMedia, Typography, Button,TextField } from '@material-ui/core'
import './product.scss'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const ProductDetail = ({product})=>{
    
    return(
        <>
            {product ? (
                <>
                    <Grid cointainer style={{paddingRight:24, paddingLeft:24, paddingTop:24, display:'flex'}}>
                        <Grid item xs={6} sm={4} md={3} lg={4} xl={2}>
                            <Card>
                                <CardMedia 
                                    style={{ height: 0, paddingTop: "100%" }}
                                    image={product.image}
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
                            {/* <Typography component="p" align="left" style={{marginBottom:10}}>
                                penerbit : Informatika
                            </Typography>
                            <Typography component="p" align="left" style={{marginBottom:10}}>
                                penulis : Jhohn Doe
                            </Typography>
                            <Typography component="p" align="left" style={{marginBottom:10}}>
                                Kategori : pemrograman
                            </Typography>
                            <Typography component="p" align="left" style={{marginBottom:10}}>
                                Berat : 760 gram
                            </Typography> */}


                            <Grid 
                                container
                                justify="space-between"
                                style={{marginBottom:10}}
                            >
                                <Grid item xs={6}>
                                    <ul style={{marginBottom:"unset"}} className="no-style" align="left">
                                        <li className="mb-10"><span className="fw-semibold">Penerbit</span> : <span>Informatika</span></li>  
                                        <li className="mb-10"><span className="fw-semibold">Penulis</span> : <span>John Dow</span></li>  
                                    </ul>
                                </Grid>
                                <Grid item xs={6}>
                                    <ul style={{marginBottom:"unset"}} className="no-style" align="left">
                                        <li className="mb-10"><span className="fw-semibold">Kategori</span> : <span>Pemrograman</span></li>  
                                        <li className="mb-10"><span className="fw-semibold">Berat</span> : <span>260 gram</span></li>  
                                    </ul>
                                </Grid>

                            </Grid>
                            <Typography component="p" align="left" style={{marginBottom:10}}>
                            Sit amet consectetur, adipisicing elit. Distinctio aperiam debitis ipsa veniam eos quas excepturi quae? Recusandae distinctio nihil quia quis, eaque aspernatur perferendis repudiandae adipisci labore, impedit beatae!
                            </Typography>

                            <Typography component="p" align="left" style={{marginBottom:10}}>
                                Tersedia <span className="primary-color fw-bold">{product.stock}</span> Barang
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