import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'search',
  initialState: {
    id_category: "",
  },
  reducers: {
    setIdCategory: (state, action) => {
      state.id_category = action.payload;
    }
  },
});

export const  { setIdCategory } = categorySlice.actions;
export default categorySlice.reducer;