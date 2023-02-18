import { createSlice } from "@reduxjs/toolkit"

const initialState = {items:[], totalQuantity:0, totalPrice:0}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addToCart(state, action){
            const newItem=action.payload
            const existingItem = state.items.find((e)=>e.id===newItem.id)
            state.totalQuantity++
            state.totalPrice+=newItem.price
            if(!existingItem){
                state.items.push({...newItem, quantity:1, totalPrice:newItem.price})
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice+=existingItem.price

            }
        },
        removeFromCart(state, action){
            const id = action.payload
            const existingItem = state.items.find((e)=>e.id===id)
            state.totalQuantity--
            state.totalPrice-=existingItem.price
            if(existingItem.quantity>1){
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price

            }
            else{
                 state.items = state.items.filter(item=>item.id!==id)
            }

        },
        clearItemFromCart(state,action){
            const id = action.payload
            state.items = state.items.filter(item=>item.id!==id)

        }
    }
})

export default productSlice;
export const productAction = productSlice.actions;

