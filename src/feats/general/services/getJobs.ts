import axios from "axios"
import * as env from "@/data/enviroments"
const getJobs = 
async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
  const response = await axios.get(`${env.apiUrl}/jobs`)
  return response
}

export default getJobs