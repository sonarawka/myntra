import { configureStore } from '@reduxjs/toolkit'
import loggedInSlice from './loggedIn';
import productSlice from './product'

const store = configureStore({
    reducer:{product:productSlice.reducer, loggedIn:loggedInSlice.reducer}})


export default store;