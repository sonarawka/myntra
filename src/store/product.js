import { createSlice } from "@reduxjs/toolkit"

const initialState = {items:[], totalQuantity:0, totalPrice:0,discount:0}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        addToCart(state, action){
            const newItem=action.payload
            const existingItem = state.items.find((e)=>e.id===newItem.id)
            state.totalQuantity++
            state.totalPrice+=newItem.price
            state.discount+=newItem.discountPrice
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
            state.discount-=existingItem.discountPrice
            if(existingItem.quantity>1){
                existingItem.quantity--
                existingItem.totalPrice-=existingItem.price

            }
            else{
                 state.items = state.items.filter(item=>item.id!==id)
            }
        //     if(existingItem.quantity===1){
        //         state.items = state.items.filter(item=>item.id!==id)
        //    }
        //    else{
        //        existingItem.quantity--
        //        existingItem.totalPrice-=existingItem.price

        //    }

        },
        clearItemFromCart(state,action){
            const id = action.payload
            const itemToRemove = state.items.find(item=>item.id===id)
            state.items = state.items.filter(item=>item.id!==id)
            state.discount-=itemToRemove.discountPrice*itemToRemove.quantity
            state.totalQuantity-=itemToRemove.quantity
            state.totalPrice-=itemToRemove.totalPrice

        }
    }
})

export default productSlice;
export const productAction = productSlice.actions;

