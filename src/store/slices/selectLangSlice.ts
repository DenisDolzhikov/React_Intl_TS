import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOCALES } from "../../i18n/locales";

interface ICurrentLanguage {
  currentLanguage: LOCALES;
  defaultLanguage: LOCALES;
}

const initialState: ICurrentLanguage = {
  currentLanguage: LOCALES.RUSSIAN,
  defaultLanguage: LOCALES.RUSSIAN,
}

const languageSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    changeCurrentLanguage: (state, action: PayloadAction<LOCALES>) => {
      state.currentLanguage = action.payload;
    }
  },
});

export default languageSlice.reducer;
export const { changeCurrentLanguage } = languageSlice.actions;