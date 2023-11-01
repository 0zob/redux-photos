import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showOnlyLikes: false
};

export const sideMenuSlide = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {
    toggleShowOnlyLike: (state) => {
      state.showOnlyLikes = !state.showOnlyLikes;
    }
  }
});

export const { toggleShowOnlyLike } = sideMenuSlide.actions;
