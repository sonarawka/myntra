import { createSlice } from "@reduxjs/toolkit"

const initialState = {isloggedIn:false}

const loggedInSlice = createSlice({
    name:"loggedIn",
    initialState,
    reducers:{
        loggedIn(state){
            state.isloggedIn=true
        },
        logout(state){
            state.isloggedIn=false
        }
    }
})

export default loggedInSlice;
export const loggedInAction = loggedInSlice.actions