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
            
              <Paper
                variant='outlined'
                elevation={12}
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
                      "&:hover": {
                        backgroundColor: "#30F1C4",
                        color: "#16453A",
                      },
                      backgroundColor: '#1CBD91',
                      textTransform: 'none'
                      
                    }}
                    >Login</Button>

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
                      Dont have an account? <Button variant="text"
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
                  Sign Up</Button>
                    </Typography>
                
                
              </Paper>
          </FormGroup>
        </Box>
      </form>
    
  )
}
