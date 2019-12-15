import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
// import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import SnackbarContentWrapper from '../components/SnackbarContentWrapper'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Fiolapedia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function RegisterPage() {
  const classes = useStyles();
  let history = useHistory()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('hello')
  const [showMessage, setShowMessage] = useState(false)
  const [messageType, setMessageType] = useState('error')

  const showMessageBox = (msg)=>{
    setShowMessage(true)
    setMessage(msg)
  }

  const hideMessageBox = ()=>{
    setShowMessage(false)
    setMessage('')
  }

  const registerHandler = async (e) => {
    e.preventDefault();
    hideMessageBox()

    if(!email || !name || !password){
      showMessageBox("Please fill in the data correctly")
      return
    }
    
    const registerUrl = 'http://localhost:3000/register';
    
    let response
    try{
      response = await axios.post(registerUrl, {name, email, password});
      console.info(response)

      if(response.status==201){
        const userData = response.data
        window.localStorage.setItem('userData', JSON.stringify(userData))
        history.push('/')
      }else{
        showMessageBox('Failed to register user')
      }
    }catch(err){
      console.error(err);
      const error = JSON.parse(JSON.stringify(err));
      showMessageBox(error.message)
    }
    
    
    
  }
  

  return (
    
    <>

    <Container component="main" maxWidth="xs">

      <CssBaseline />

      <div className={classes.paper}>
        
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Register
        </Typography>

        <form className={classes.form} noValidate>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            onChange={e=>setName(e.target.value)}
            autoFocus
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={e=>setEmail(e.target.value)}
            autoFocus
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={e=>setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <Button
            // type="submit"
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={registerHandler}
          >
            Register
          </Button>

          <Grid container>
            {/* <Grid item xs align="left">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid> */}

            <Grid item align="right">
              <Link to="/login">
                {"Have an account? Sign In here"}
              </Link>
            </Grid>
          </Grid>

        </form>
      </div>

      <Box mt={8}>
        <Copyright />
      </Box>

    </Container>



      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={showMessage}
        autoHideDuration={6000}
        onClose={ ()=> setShowMessage(false) }
      >
        <SnackbarContentWrapper
          // onClose={handleClose}
          variant={messageType}
          message={message}
        />
      </Snackbar>
    </>
  );
}
