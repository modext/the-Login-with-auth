import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import authReducer from '../services/authSlice'
import userReducer from '../services/userSlice'

export const store = configureStore({
   reducer: {
    auth: authReducer,
    user: authReducer,
   },

});

setupListeners(store.dispatch)
