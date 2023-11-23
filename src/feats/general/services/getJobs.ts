import axios from "axios"
import * as env from "@/data/enviroments"
const getJobs = 
async () => {
  const response = await axios.get(`${env.apiUrl}/jobs`)
  return response
}

export default getJobs