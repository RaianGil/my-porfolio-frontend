import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store/types"
import actions from "./actions"

const initialState = {
  appReady: false,
  appInit: true,
  darkMode: false,
  dbMode: false
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions,
  extraReducers(builder) {
      builder
  },
})

export const selectGlobal = (state:AppState) => state.global
export const selectAppReady = (state:AppState) => state.global.appReady
export const selectDarkMode = (state:AppState) => state.global.darkMode
export const selectDBMode = (state:AppState) => state.global.dbMode
export const { setReady, unsetReady, unsetInitApp, setUnsetDarkMode, setUnsetDBMode } = globalSlice.actions
export const globalReducer = globalSlice.reducer