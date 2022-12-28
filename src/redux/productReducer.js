import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

const productReducer = createSlice({
  name: "productDataReducer", //type: name/function name: productDataReducer/updateProductData
  initialState,
  reducers: {
    updateProductData: (state, action) => {
      state.productData = action.payload;
    },
  },
});

export const { updateProductData } = productReducer.actions;

export default productReducer.reducer;
