import { createAsyncThunk } from "@reduxjs/toolkit";
import getFeedbacks from "../services/getFeedbacks";

export const useGetFeedbacks = createAsyncThunk(
  'service/getFeedbacks',
  async () => {
    const resp:any = await getFeedbacks()
    return resp.data
  }
)