import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./g-contents/dark-slice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
  },
});
