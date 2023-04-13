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
      const index = state.items.findIndex((item) => item.id == action.payload.id);
      let newBasket = [...state.items];
      if (index>=0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`Not allowed`)
      }
      state.items = newBasket;
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

export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) => total+= item.price, 0)

export default basketSlice.reducer