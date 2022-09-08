import React, {useEffect, useState} from 'react'
import { Box, Button, Checkbox, Paper, TextField, Typography, Visibility } from '@mui/material'
import {Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import { Logo } from '../assets'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment,selectCount, incrementByAmount, incrementAsync, } from '../services/authSlice'
// import {useForm} from 'react-hook-form'
//  import { register, reset } from '../services/authSlice';

export default function Login() {
const username1 = 'John'
const navigate = useNavigate()

const handleSub = (e) => {
  e.preventDefault();

  var raw = "";
  const token = window.localStorage.getItem("token");
  console.log("maintok",  token)
 

  var requestOptions = {
    method: 'POST',
    body: raw,
    redirect: 'follow',
    headers: { 'Content-Type': "application/json", "Authorization": `Bearer ${token}`  }
  };
  
  fetch("https://adminstaging.airgate.ng/index.php/api/auth/logout", requestOptions)
  .then(response => response.text())
  .then(result => {
      window.localStorage.removeItem('token')
      window.location.replace("/")
    
  })
  .catch(error => console.log('error', error));
}

  return (

       
      
       <Box
        sx={{
          marginTop: '2rem',
          maxHeight: '100%',
        
        }}
       >
        
       <Logo />
        
        <Box
            sx={{
              position: 'absolute',
            bottom: '200px',
            top: '20rem',
            right: '5rem',
            marginBottom: '3.812rem',
              
              
            }}
        >
          
        
         
          
            <Paper
              sx={{
              
                position: 'flex',
                width: {xs:'70%', sm:'60%',lg:'70%'},
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: {xs:'1rem 0.5rem',sm:'1.5rem 1.5rem',md:'2rem 2.5rem', lg:'2.875rem 3.375rem'},
                borderRadius: '12px',
                flexDirection: 'row',
              }}
            >
              <Box
                
              >
                <Typography
                sx={{ 
                  fontFamily: 'Rubik',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  fontSize: '1.5rem',
                  
                  color: '#000000',
                  marginBottom: '1rem',
                }}
                >
                  Hi {username1}!
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
                    marginBottom: '1rem',
                  }}
                >
                  Thank you for using our service.
                </Typography>

              </Box>
              
              

              <Box>
                                 
              </Box>
              <Button variant="text"
                onClick={handleSub}
                sx={{ 
                  top: '.625rem',
                  fontFamily: 'Rubik',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  fontSize: '1rem',
                  lineHeight: '132%',
                  color: '#4834D4',
                  textTransform: 'none'
                }}
                >
                  Logout</Button>
              
              
            </Paper>
        </Box>
      </Box>
    
  )
}
