import { createAsyncThunk } from "@reduxjs/toolkit";
import getProjects from "../services/getProjects";

export const useGetProjects = createAsyncThunk(
  'service/getProjects',
  async () => {
    const resp:any = await getProjects()
    return resp.data
  }
)