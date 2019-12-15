import React from 'react'
import {Grid, TextField, Typography, } from '@material-ui/core'
import Product from './Product'

const ProductList =({products})=>{

    // state = {
    //     products: [
    //         {
    //             id:1,
    //             thumbnail:'https://s1.bukalapak.com/img/65900269611/medium/data.png',
    //             title:'Buku Pemrograman Android dengan Flutter Budi Raharjo',
    //             description:'Tammuz merupakan merk korea yang fokus pada storage terutama SSD, Produk ini terjual lebih dari WD dan Adata di korea. Dengan kualitas setara dengan samsung, urban geeks hadirkan brand ini untuk anda di indonesia.',
    //         },
    //         {
    //             id:2,
    //             thumbnail:'https://s3.bukalapak.com/img/3257389459/medium/node_js.jpg',
    //             title:'Buku Pemrograman Web dengan Node Js dan Javascript',
    //             description:'Samsumg Portable SSD Software requires Windows 7, Mac OS X 10.9 (Mavericks), Android 4.4 (KitKat), or higher. Older versions of the Windows, Mac and Android operating systems may not be supported.',
    //         },
    //         {
    //             id:3,
    //             thumbnail:'https://s3.bukalapak.com/img/8845334646/medium/paket_modul_pemrograman_web.jpg',
    //             title:'Buku Paket Modul Pemrograman WEB',
    //             description:'Samsumg Portable SSD Software requires Windows 7, Mac OS X 10.9 (Mavericks), Android 4.4 (KitKat), or higher. Older versions of the Windows, Mac and Android operating systems may not be supported.',
    //         },
    //         {
    //             id:4,
    //             thumbnail:'https://s2.bukalapak.com/img/7658285034/medium/3.jpg',
    //             title:'Buku Pemrograman C Dan C++',
    //             description:'Samsumg Portable SSD Software requires Windows 7, Mac OS X 10.9 (Mavericks), Android 4.4 (KitKat), or higher. Older versions of the Windows, Mac and Android operating systems may not be supported.',
    //         },
    //         {
    //             id:5,
    //             thumbnail:'https://cf.shopee.co.id/file/8bb1856f0c216ec88d709a32ad861a08',
    //             title:'Samsung Portable SSD T5 500GB',
    //             description:'Samsumg Portable SSD Software requires Windows 7, Mac OS X 10.9 (Mavericks), Android 4.4 (KitKat), or higher. Older versions of the Windows, Mac and Android operating systems may not be supported.',
    //         },
    //         {
    //             id:6,
    //             thumbnail:'https://cf.shopee.co.id/file/8bb1856f0c216ec88d709a32ad861a08',
    //             title:'Samsung Portable SSD T5 500GB',
    //             description:'Samsumg Portable SSD Software requires Windows 7, Mac OS X 10.9 (Mavericks), Android 4.4 (KitKat), or higher. Older versions of the Windows, Mac and Android operating systems may not be supported.',
    //         }
    //     ],
    // }

    

    return(
        <>
            {products && products.length>0? (
                <>
                    <Grid container justify="flex-start" style={{paddingTop:24, paddingLeft:24, paddingRight:24}}>
                        {products.map(product=>(
                            <Grid key={product.id} item xs={6} sm={4} md={3} lg={2} xl={2} style={{padding:8}}>
                                <Product product={product}/>
                            </Grid>
                        ))}
                    </Grid>
                </>
            ) : <Typography component="p" variant="p" style={{paddingTop:24}}>- Produk tidak ditemukan -</Typography> }
        </>
    )
    
}

export default ProductList;