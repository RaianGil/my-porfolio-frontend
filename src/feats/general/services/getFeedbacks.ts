import axios from "axios"
import * as env from "@/data/enviroments"
const getFeedbacks = 
async () => {
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = '0';
  const response = await axios.get(`${env.apiUrl}/feedbacks`)
  return response
}

export default getFeedbacks