import React, {useEffect, useState} from 'react'
import { Box, Button, Checkbox, Paper, FormControlLabel, TextField, Typography, FormGroup } from '@mui/material'
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { Logo } from '../assets'
import  { checkboxClasses } from "@mui/material/Checkbox"
// import { withStyles } from "@material-ui/core/styles";
// import { textTransform } from '@mui/system';
 import { useSelector, useDispatch } from 'react-redux'

// import {useForm} from 'react-hook-form'
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
  const navigate = useNavigate()
 
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  

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
            
          
          {/* <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '30%',
              alignItems: 'center',
              marginBottom: '0.82rem',
            }}
          >
            <Logo />
          </Box>    */}
              <Paper
                  sx={{
                    width: {xs:'70%', sm:'60%',lg:'23%'},
                    alignItems: 'center',
                    padding: {xs:'2rem 1.5rem',sm:'2.5rem 2.5rem',md:'3rem 3.5rem', lg:'3.875rem 4.9375rem'},
                    borderRadius: '12px',
                    borderColor: 'primary',
                    flexDirection: 'row',
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
                    Welcome Back!
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
                    Username
                  </Typography>
                  <TextField 
                    fullWidth
                    color="primary"
                    label='Ferdnardjohn73'
                    name
                    sx={{marginBottom: '1.5rem',}}
                    inputProps={{ 
                      marginBottom: '3rem',
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
                      setUserName(e.target.value)}}
                    value={username}
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
                    fullWidth
                    label='**************'
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
                  value={password}
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
                    onClick={() => navigate("/dashboard")} 
                    fullWidth type="submit" variant='contained'
                    sx={{
                      backgroundColor: '#4834D4',
                      textTransform: 'none'
                      
                    }}
                    >Login</Button>

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
                      Dont have an account? <Button variant="text"
                onClick={() => navigate("/register")}
                sx={{ 
                  textTransform: 'none',
                  marginTop:'-3px',
                }}
                >
                  Sign Up</Button>
                    </Typography>
                
                
              </Paper>
          </FormGroup>
        </Box>
      </form>
    
  )
}
