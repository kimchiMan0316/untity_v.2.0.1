import { createSlice } from "@reduxjs/toolkit";

// 다크 모드 초기 상태
const initialState = {
  darkMode: false, // 기본값: 다크 모드 꺼짐
};

// 다크 모드 slice 정의
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode; // 다크 모드 상태 토글
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
