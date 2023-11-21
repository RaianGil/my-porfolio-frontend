import { combineReducers } from "@reduxjs/toolkit"
import { globalReducer } from "../state"
import { popupReducer } from "../../layout/Popup/state"
import { generalReducer } from "@/feats/general/state"

const reducers = combineReducers({
  global: globalReducer,
  popup: popupReducer,
  general: generalReducer,
})

export default reducers