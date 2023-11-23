import axios from "axios"
import * as env from "@/data/enviroments"
const getProjects = 
async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
  const response = await axios.get(`${env.apiUrl}/projects`)
  return response
}

export default getProjects