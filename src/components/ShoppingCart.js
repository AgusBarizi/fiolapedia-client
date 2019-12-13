import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Avatar, Typography} from '@material-ui/core'

const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
  });
  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
  
  

const ShoppingCart = ({cartItems})=>{

    
    const classes = useStyles();

    function createData(name, code, population, size) {
        const density = population / size;
        return { name, code, population, size, density };
    }

    const rows = [
        createData('India', 'IN', 1324171354, 3287263),
        createData('China', 'CN', 1403500365, 9596961),
        createData('Italy', 'IT', 60483973, 301340),
        createData('United States', 'US', 327167434, 9833520),
        createData('Canada', 'CA', 37602103, 9984670),
        createData('Australia', 'AU', 25475400, 7692024),
        createData('Germany', 'DE', 83019200, 357578),
        createData('Ireland', 'IE', 4857000, 70273),
        createData('Mexico', 'MX', 126577691, 1972550),
        createData('Japan', 'JP', 126317000, 377973),
        createData('France', 'FR', 67022000, 640679),
        createData('United Kingdom', 'GB', 67545757, 242495),
        createData('Russia', 'RU', 146793744, 17098246),
        createData('Nigeria', 'NG', 200962417, 923768),
        createData('Brazil', 'BR', 210147125, 8515767),
      ];


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
                        {cartItems? ( 
                            cartItems.map((item,index) => (
                                <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {++index}
                                </TableCell>
                                <TableCell align="left">
                                    <Avatar style={{verticalAlign:'middle', display:'inline-block'}} alt="Img" src={item.get_product.image} />
                                    <p style={{verticalAlign:'middle', margin:'unset', paddingLeft:10, display:'inline-block'}}>{item.get_product.title}</p>
                                </TableCell>
                                <TableCell align="center">{item.qty}</TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">{item.sub_total}</TableCell>
                                <TableCell align="right"></TableCell>
                                </TableRow>
                            ))
                        ):(
                            <TableRow key={'0'}>
                                <TableCell component="th" colspan={6} scope="row">Keranjang Belanja Masih Kosong</TableCell>
                            </TableRow>
                            
                        )}
                    </TableBody>
                </Table>
            </Paper>

        </>
    )
}

export default ShoppingCart