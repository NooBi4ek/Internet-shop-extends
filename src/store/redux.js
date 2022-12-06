import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './internet_shop_slice.ts';
export default configureStore({
  reducer: {
    shop: shopReducer,
  },
});
