import {createStore,combineReducers} from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import LoginReducer from './reducers/loginReducer/loginReducer';
import SignupReducer from './reducers/signupReducer/signupReducer';
import UserLocationReducer from './reducers/userLocationReducer/userLocationReducer';
import markersReducer from './reducers/markersReducer/markersReducer';

let AllReducers = combineReducers({LoginReducer,SignupReducer,UserLocationReducer,markersReducer});
   
const persistConfig = {
    key: 'root',
    storage,
  }
   
  const persistedReducer = persistReducer(persistConfig, AllReducers);
   
    let store = createStore(persistedReducer);
    export default store;