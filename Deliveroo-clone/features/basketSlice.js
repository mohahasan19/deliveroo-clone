import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = basketSlice.actions

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithId = (state, id) => {
    //state.basket.items.filter((item) => item.id == id)
    let itemsarr = []
    for (let i = 0; i < state.basket.items.length; i++) {
        if (state.basket.items[i].id == id) {
            itemsarr.push(state.basket.items[i].item)
        }
    } 
    return itemsarr;
}

export default basketSlice.reducer