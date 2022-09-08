import { createStore } from 'redux';
import { combineReducers } from 'redux';

import {authReducer} from './authentication/reducers';
 

const store = createStore(rootReducer);

export default store;