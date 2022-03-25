import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        totalPrice: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            const itemIndex = state.products.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.products[itemIndex].count += 1;
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1 };
                state.products.push(tempProduct);
            }
            state.totalPrice += action.payload.price * action.payload.count;
        },
        removeProduct: (state, action) => {
            const nextCartItems = state.products.filter(
                item => item._id !== action.payload._id
            );
            state.products = nextCartItems;
            state.totalPrice -= action.payload.price * action.payload.count;
        }
    }
})

export const { addProduct, removeProduct } = cartSlice.actions
export default cartSlice.reducer;