import { createSlice } from '@reduxjs/toolkit';

const searchTextSlice = createSlice({
  name: 'search',
  initialState: {
    text: "",
    cartData: []
  },
  reducers: {
    setTextSearch: (state, action) => {
      state.text = action.payload;
    },
    addToCart: (state: any, action: any) => { 
        console.log(action.payload);
      state.cartData.push(action.payload);
    }
  },
});

export const { setTextSearch, addToCart } = searchTextSlice.actions;
export default searchTextSlice.reducer;