import axios from "axios"
const getJobs = 
async () => {
  const apiUrl = process.env.API_URL || "http://localhost:3001"
  const response = await axios.get(`${apiUrl}/jobs`)
  return response
}

export default getJobs