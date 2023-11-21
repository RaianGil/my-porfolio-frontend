import { createAsyncThunk } from "@reduxjs/toolkit";
import postIdInfo from "../services/postIdInfo";

export const usePostIdInfo = createAsyncThunk(
  'service/postIdInfo',
  async (cedula:string) => {
    const resp:any = await postIdInfo(cedula)
    return resp.data
  }
)