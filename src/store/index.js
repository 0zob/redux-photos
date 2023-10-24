import { configureStore } from "@reduxjs/toolkit";
import { photoSlice } from "./reducers/photo";

export const store = configureStore({
  reducer: {
    photo: photoSlice.reducer
  }
});
