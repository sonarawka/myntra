import { createSlice } from "@reduxjs/toolkit"

const initialState = {items:[], totalQuantity:0, totalPrice:0}

const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        addToCart(state){
            state.items.push({name:""})
        },
        removeFromCart(state, actions){
            state.items.filter(item=>item.id!==actions.payload)
        }
        
    }
})

export default counterSlice;
export const counterAction = counterSlice.actions;

