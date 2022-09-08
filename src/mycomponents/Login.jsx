import React, {useEffect, useState, useRef} from 'react'
import { Box, Button, Checkbox, Paper, FormControlLabel, TextField, Typography, FormGroup } from '@mui/material'
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { Logo } from '../assets'
import  { checkboxClasses } from "@mui/material/Checkbox"
// import { withStyles } from "@material-ui/core/styles";
// import { textTransform } from '@mui/system';
 import { useSelector, useDispatch } from 'react-redux'

import {useForm} from 'react-hook-form'
import axios from 'axios'
//  import { register, reset } from '../services/authSlice';

const styles = ( theme )=> ({
  // Each time you use `LabeledCheckBox` you can inject new styles
  // that will overwrite the default styles.
  labelA: {
    fontWeight: 800,
    color: theme.palette.text.primary
  },
  labelB: {
    fontWeight: 400,
    fontSize: 14
  }
});


export default function Login() {

  // from JWT AUTHEN
  const submitForm = (data) => {
    console.log(data.email)
  }

  const { register, } = useForm()
  // const { register, handleSubmit } = useForm()
  //JST ends

  // From Normal Axios own
  const USER_REGEX = /^\[A-z\][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  // const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState('');
  // const [validName, setValidName] = useState('');
  // const [userFocus, setUserFocus] = useState(false);
  const [password, setPassword] = useState("");
  // const [validPwd, setValidPwd] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  // const [user, setUser] = useState("");
  const [username, setUserName] = useState('')
  // const userRef = useRef();

  //  useEffect(() => {
  //    userRef.current.focus();
  //  }, []);
  useEffect(() => {
    setUserName(username);
  }, [username]);
  // useEffect(() => {
  //   setValidEmail(USER_REGEX.test(email));
  // }, [email]);
  useEffect(() => {
    setPassword(password);
  }, [password]);
  // useEffect(() => {
  //   setErrMsg("");
  // }, [user, password]);


  const handleSub = (e) => {
    e.preventDefault();
    const login = useSelector((state) => state.status);
    const dispatch = useDispatch();

    var raw =JSON.stringify({
       email : email, 
      password: password 
    }) 

    // var raw = "{\r\n    \"email\": \"super@airvend.ng\",\r\n    \"password\": \"Qwerty@123!!!!\"\r\n}";

    var requestOptions = {
      method: 'POST',
      body: raw,
      redirect: 'follow',
      // contentType : "application/json",
      headers: { 'Content-Type': "application/json" }
    };
    
    fetch("https://adminstaging.airgate.ng/index.php/api/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        const newres = JSON.parse(result)
        console.log( 'main', newres );
        if(newres.status === true) {
          window.localStorage.setItem('token', newres.data.access_token);
          window.location.replace("/dashboard")
        }
      })
      .catch(error => console.log('error', error));
    
    
    console.log(email)
    console.log(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const v1 = USER_REGEX.test(username);
    // const v2 = PWD_REGEX.test(password);
    // if (!v1 || !v2) {
    //   setErrMsg("Invalid Entry");
    //   return;
    // };
    console.log(email)
   console.log(password)
    var axios = require('axios');
    var data = ' '
    
    // var data = '{\r\n    "email": {"super@airvend.ng"},\r\n    "password": "Qwerty@123!!!!"\r\n}';
    var config = {
      method: 'post',
      url: 'https://adminstaging.airgate.ng/index.php/api/auth/login',
      headers: { },
      data : data
    };

    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  





  //RELEVANTS
  const navigate = useNavigate()
 
  
  // const [password, setPassword] = useState('')
  

  return (

    <form action='/dashboard'>
    

      <Box>    
        
        <FormGroup
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            
            
          }}
        >
            
              <Paper
                // variant='outlined'
                // elevation={12}
                  sx={{
                    width: {xs:'70%', sm:'60%',lg:'23%'},
                    alignItems: 'center',
                    padding: {xs:'1rem 0.5rem',sm:'1.5rem 1.5rem',md:'2rem 2.5rem', lg:'2.875rem 3.9375rem'},
                    borderRadius: '50px',
                    borderColor: 'primary',
                    flexDirection: 'row',
                    border: "20px solid green"
                  }}
              >
                <Box
                  sx ={{
                    textAlign: 'center',
                  }}
                >
                  <Typography
                  sx={{ 
                    left: '91.69px',
                    top: '0px',
                    fontFamily: 'Rubik',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    fontSize: '1.5rem',
                    lineHeight: '132%',
                    color: '#000000',
                    marginBottom: '.5rem',
                    marginTop: '-1rem',
                  }}
                  >
                    Welcome!
                  </Typography>


                  <Typography
                    sx={{ 
                      top: '2.625rem',
                      fontFamily: 'Rubik',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '1rem',
                      lineHeight: '132%',
                      color: '#444444',
                      marginBottom: '.rem',
                    }}
                  >
                    Log into your account
                  </Typography>

                </Box>
                
                <Box>
                  <Typography
                    sx={{
                      fontFamily: 'Rubik',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '0.875rem',
                      color: '#9B9B9B',
                      marginBottom: '.5rem',
                      }}

                      
                  >
                    Username/Email
                  </Typography>
                  <TextField 
                    {...register('email')}
                    fullWidth
                    color="primary"
                    label='Ferdnardjohn73'
                    name= 'email'
                    sx={{marginBottom: '1.5rem',}}
                    inputProps={{ 
                      
                    sx:{
                      "& label": {color: "#161616"},
                      backgroundColor: '#fafafa',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',                      
                      borderRadius: '0.5rem',
                      height: '1rem',                      
                      fontFamily:  'Rubik',
                      }}
                    }
                      onChange={(e) => {
                      // setUserName(e.target.value)}}
                      setEmail(e.target.value)}}
                      // value={username}
                      value={email}
                    
                  />
                  <Typography
                    sx={{
                      fontFamily: 'Rubik',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '0.875rem',
                      color: '#9B9B9B',
                      marginBottom: '.5rem',
                      }}
                  >
                    Password
                  </Typography>
                  <TextField 
                    {...register('password')}
                    fullWidth
                    label='**************'
                    type= 'password'
                    name= 'password'
                    inputProps={{ 
                    sx:{
                      "& label": {color: "#161616"},
                      backgroundColor: '#fafafa',
                      
                      borderRadius: '0.5rem',
                      height: '1rem',
                      fontFamily:  'Rubik',
                      
                    }
                    
                  }}
                  onChange={(e) => {
                    setPassword(e.target.value)}}
                  
                  />
                </Box>

                <Box>
                  <Box
                    sx={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        display: 'flex',
                        marginLeft: '-12px'
                      }}
                    >
                      <FormGroup row 
                        sx={{
                          marginLeft:'10px',}}
                      >
                        <FormControlLabel
                          control={
                          <Checkbox name="laptop" value="yes" 
                            sx={{
                              [`&, &.${checkboxClasses.checked}`]: {
                                color: '#858585',
                                opacity: '0.08',
                                
                              },
                              
                            }}
                          />}
                          label={
                            <Typography
                              sx={{
                                fontFamily: 'Rubik',
                                fontStyle: 'normal',
                                fontWeight: '500',
                                fontSize: '0.75rem',
                                color: '#13113F',
                                lineHeight: '150%',
                              }} 
                            >
                              Remember Me
                            </Typography>
                          } 
                          
                        />
                      </FormGroup>
                    </Box>
                    
                  
                  
                    <Typography
                      sx={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '0.75rem',
                        color: '#13113F',
                        lineHeight: '150%',
                      }} 
                    >
                      Forgot Password?
                    </Typography>
                  </Box>
                </Box>
                
                  <Button 
                    onClick={handleSub}
                    fullWidth 
                    type="submit" 
                    variant='contained'
                    sx={{
                      "&:hover": {
                        backgroundColor: "#30F1C4",
                        color: "#16453A",
                      },
                      backgroundColor: '#1CBD91',
                      textTransform: 'none'
                      
                    }}
                    >
                      Login
                    </Button>

                    <Typography
                      sx={{
                        fontFamily: 'Rubik',
                        fontStyle: 'normal',
                        fontWeight: '500',
                        fontSize: '0.75rem',
                        color: '#1CBD91',
                        lineHeight: '150%',
                      }} 
                    >
                      Dont have an account? 
                      <Button variant="text"
                        onClick={() => navigate("/register")} 
                        sx={{ 
                          textTransform: 'none',
                          fontFamily: 'Rubik',
                          fontStyle: 'normal',
                          fontWeight: '500',
                          fontSize: '0.9rem',
                          marginTop:'-3px',
                          color: "#16453A",
                        }}
                      >
                        Sign Up
                      </Button>
                    </Typography>
                
                
              </Paper>
          </FormGroup>
        </Box>
      </form>
    
  )
}
