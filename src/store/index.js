import { configureStore } from "@reduxjs/toolkit";
import { photoSlice } from "./reducers/photo";
import { sideMenuSlide } from "./ui/sideMenu";

export const store = configureStore({
  reducer: {
    photo: photoSlice.reducer,
    sideMenu: sideMenuSlide.reducer
  }
});
