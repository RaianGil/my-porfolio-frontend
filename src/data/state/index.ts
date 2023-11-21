import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store/types"
import actions from "./actions"

const initialState = {
  appReady: false,
  appInit: true
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
export const { setReady, unsetReady, unsetInitApp } = globalSlice.actions
export const globalReducer = globalSlice.reducer