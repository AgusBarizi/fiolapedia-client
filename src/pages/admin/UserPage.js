import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";
import NavBar from "../../components/admin/NavBar";
import {useHistory} from "react-router";
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

const UserPage = () => {

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
    

    const [users, setUsers] = useState(null)
    

    
    axios.defaults.headers = {
        'Content-Type': 'application/json',
        Authorization: userData ? userData.token : '',
    }

    const fetchUsers = ()=>{
        const url = `http://localhost:3000/users`
        axios.get(url).then((res)=>{
            console.info(res)
            if(res.status==200){
                setUsers(res.data.users)
            }else{

            }
        }).catch((err)=>{
            console.log(err)
        })
    }


    useEffect(()=>{
        fetchUsers()
    },[])

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
          Users
        </Typography>

        <Paper className={classes.root}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell width={50}>No</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Role</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users ? (
                users.map((_user, index) => {
                  
                  return (
                    <TableRow key={_user._id}>
                      <TableCell component="th" scope="row">{++index}</TableCell>
                      <TableCell align="left">{_user.name}</TableCell>
                      <TableCell align="left">{_user.email}</TableCell>
                      <TableCell align="left">{_user.role}</TableCell>
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

export default UserPage;
