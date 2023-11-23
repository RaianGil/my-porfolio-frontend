import { createAsyncThunk } from "@reduxjs/toolkit";
import getBackendVersion from "../services/getBackendVersion";

export const useGetBackendVersion = createAsyncThunk(
  'service/getBackendVersion',
  async () => {
    const resp:any = await getBackendVersion()
    return resp.data
  }
)