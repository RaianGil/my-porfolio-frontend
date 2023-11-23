import axios from "axios"
import * as env from "@/data/enviroments"
const getBackendVersion = 
async () => {
  const response = await axios.get(`${env.apiUrl}/app/version`)
  return response
}

export default getBackendVersion