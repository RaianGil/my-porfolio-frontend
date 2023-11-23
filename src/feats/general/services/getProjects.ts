import axios from "axios"
import * as env from "@/data/enviroments"
const getProjects = 
async () => {
  const response = await axios.get(`${env.apiUrl}/projects`)
  return response
}

export default getProjects