import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDark:
    localStorage.getItem("isDark") !== null
      ? JSON.parse(localStorage.getItem("isDark")!)
      : false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem("isDark", state.isDark);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const currentTheme = (state: RootState) => state.theme.isDark;
