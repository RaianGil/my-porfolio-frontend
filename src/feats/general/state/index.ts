import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "../../../data/store/types"
import { useGetBackendVersion, useGetJobs, useGetProjects } from "../hooks"
const packageJson = require('../../../../package.json');
const initialState = {
  mainTitle: 'tu solución a un click de distancia',
  mainText: 'Descubre soluciones de software avanzadas y asesoramiento experto diseñados para complementar tu éxito.',
  jobs: [],
  projects: [],
  version: packageJson.version,
  backendVersion: ""
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
      .addCase(useGetJobs.rejected, (state, payload:any) =>{
        console.log(payload)
      })
      .addCase(useGetProjects.fulfilled, (state, {payload}:PayloadAction<any>) => {
        state.projects = payload
      })
      .addCase(useGetProjects.rejected, (state, payload:any) =>{
        console.log(payload)
      })
      .addCase(useGetBackendVersion.fulfilled, (state, {payload}:PayloadAction<any>) => {
        if(payload.version)
          // state.backendVersion = payload.version.split('-')[0]
          state.backendVersion = payload.version
      })
      .addCase(useGetBackendVersion.rejected, (state, payload:any) =>{
        console.log(payload)
      })
  },
})

export const selectGeneral= (state: AppState) => state.general
export const {  } = generalSlice.actions

export const generalReducer = generalSlice.reducer