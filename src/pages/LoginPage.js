import React, {useState} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useHistory } from 'react-router'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
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

export default function LoginPage() {
  const classes = useStyles();
  let history = useHistory()

  const [email, setEmail] = useState('')
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

  const loginHandler = async (e) => {
    e.preventDefault();
    hideMessageBox()
    
    // const loginUrl = 'http://lararest.cloudappsolution.com/api/00000/login';
    const loginUrl = 'http://localhost/lararest/public/api/00000/auth/login';
    // axios.post(loginUrl, {email, password})
    //   .then((res)=>{})
    //   .catch((err)=>{});
    let response
    try{
      response = await axios.post(loginUrl, {email, password});
      console.info(response)
    }catch(err){
      console.error(err);
      const error = JSON.parse(JSON.stringify(err));
      showMessageBox(error.message)
    }
    
    if(response.status==200 && response.data.message=='OK'){
      
      history.push('/')
      // return <Redirect to="/" />
    }else{
      showMessageBox('These credentials do not match our records')
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
          Sign in
        </Typography>

        <form className={classes.form} noValidate>
          
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

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}

          <Button
            // type="submit"
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={loginHandler}
          >
            Sign In
          </Button>

          <Grid container>
            <Grid item xs align="left">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>

            <Grid item align="right">
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
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
