import { createAsyncThunk } from "@reduxjs/toolkit";
import postCheckDevice from "../services/getJobs";
import getJobs from "../services/getJobs";

export const useGetJobs = createAsyncThunk(
  'service/getJobs',
  async () => {
    const resp:any = await getJobs()
    return resp.data
  }
)