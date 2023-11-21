import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { useGetJobs } from "../hooks"
const packageJson = require('../../../../package.json');
const initialState = {
  mainTitle: 'tu solución a un click de distancia',
  mainText: 'Descubre soluciones de software avanzadas y asesoramiento experto diseñados para complementar tu éxito.',
  jobs: [],
  version: packageJson.version
}
const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(useGetJobs.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.jobs = payload
      })
  },
})

export const selectGeneral= (state: AppState) => state.general
export const {  } = generalSlice.actions

export const generalReducer = generalSlice.reducer