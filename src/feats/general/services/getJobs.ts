import axios from "axios"
import * as env from "@/data/enviroments"
const getJobs = 
async () => {
  const response = await axios.post(`${env.apiUrl}/jobs`)
  return response
}

export default getJobs