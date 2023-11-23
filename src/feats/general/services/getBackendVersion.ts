import axios from "axios"
import * as env from "@/data/enviroments"
const getBackendVersion = 
async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
  const response = await axios.get(`${env.apiUrl}/app/version`)
  return response
}

export default getBackendVersion