import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import NavBar from "../../components/admin/NavBar";
import { useHistory } from 'react-router'
import {
  Container,
  Avatar,
  Typography,
  IconButton,
  Button,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

const ProductPage = () => {
  const classes = useStyles();
  
  
  let history = useHistory()
  const userData = window.localStorage.getItem("userData")
  ? JSON.parse(window.localStorage.getItem("userData"))
  : null;
  
  if(userData){
    if(userData.user.role!='ADMIN') history.push('/')
  }else{
    history.push('/login')
  }
  const [products, setProducts] = useState(null);
  
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: userData ? userData.token : ""
  };

  const fetchProducts = () => {
    const url = `http://localhost:3000/books`;
    axios
      .get(url)
      .then(res => {
        console.info(res);
        if (res.status == 200) {
          setProducts(res.data.books);
        } else {
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <NavBar />

      <div style={{ paddingTop: 65 }}></div>
      <Container>
        <Typography
          component="h5"
          style={{ marginTop: 15, marginBottom: 15 }}
          variant="h5"
          align="left"
        >
          Products
        </Typography>

        <Grid container justify="right">
            <Grid item align="right"><Button onClick="" style={{marginTop:24}} variant="contained" color="primary">Add Product</Button></Grid>
        </Grid>

        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={50}>No</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="center">Qty</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Writer</TableCell>
                <TableCell align="right">Publisher</TableCell>
                <TableCell align="center">Weight</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products ? (
                products.map((_product, index) => {
                  return (
                    <TableRow key={_product._id}>
                      <TableCell component="th" scope="row">
                        {++index}
                      </TableCell>
                      <TableCell align="left">
                        <Avatar
                          style={{
                            verticalAlign: "middle",
                            display: "inline-block"
                          }}
                          alt="Img"
                          src={_product.image}
                        />
                        <p
                          style={{
                            verticalAlign: "middle",
                            margin: "unset",
                            paddingLeft: 10,
                            display: "inline-block"
                          }}
                        >
                          {_product.title}
                        </p>
                      </TableCell>
                      <TableCell align="center">{_product.qty}</TableCell>
                      <TableCell align="right">{_product.price}</TableCell>
                      <TableCell align="right">{_product.writer}</TableCell>
                      <TableCell align="right">{_product.publisher}</TableCell>
                      <TableCell align="right">{_product.weight}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow key={0}>
                  <TableCell colSpan={4}>Tidak ada user</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </>
  );
};

export default ProductPage;
