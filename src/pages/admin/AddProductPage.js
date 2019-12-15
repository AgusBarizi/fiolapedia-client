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
  TextField, 
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

const AddProductPage = () => {
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
  const [title, setTitle] = useState(null);
  const [qty, setQty] = useState(null);
  const [description, setDescription] = useState(null);
  const [writer, setWriter] = useState(null);
  const [publisher, setPublisher] = useState(null);
  
  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: userData ? userData.token : ""
  };

  // const addProducts = () => {
  //   const url = `http://localhost:3000/books`;
  //   axios
  //     .post(url,{title, description, category, qty, price})
  //     .then(res => {
  //       console.info(res);
  //       if (res.status == 200) {
  //         setProducts(res.data.books);
  //       } else {
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    // fetchProducts();
  }, []);

  return (
    <>
      <NavBar />

      <div style={{ paddingTop: 65 }}></div>
      <Container style={{paddingLeft:48, paddingRight:48}}>
        <Typography
          component="h5"
          style={{ marginTop: 15, marginBottom: 15 }}
          variant="h5"
          align="left"
        >
          Add Product
        </Typography>



        {/* <Paper className={classes.root} style={{paddingLeft:24, paddingRight:24}}> */}
        <form className={classes.form} noValidate>
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Title"
            name="title"
            onChange={e=>setTitle(e.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Quantity"
            name="qty"
            onChange={e=>setQty(e.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Description"
            name="description"
            onChange={e=>setDescription(e.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Writer"
            name="writer"
            onChange={e=>setWriter(e.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth 
            label="Publisher"
            name="publisher"
            onChange={e=>setPublisher(e.target.value)}
            autoFocus
          />

        <Grid container justify="right">
            <Grid item align="right"><Button onClick="" style={{marginTop:24}} variant="contained" color="primary">Submit</Button></Grid>
        </Grid>
          </form>
        {/* </Paper> */}
      </Container>
    </>
  );
};

export default AddProductPage;
