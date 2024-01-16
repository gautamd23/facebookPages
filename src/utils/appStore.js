import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlicer'

const appStore = configureStore({
    reducer:{
        user: userReducer
    }
})
export default appStore;