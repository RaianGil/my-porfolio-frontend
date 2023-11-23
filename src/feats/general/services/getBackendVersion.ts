import axios from "axios"
const getBackendVersion = 
async () => {
  const apiUrl = process.env.API_URL || "http://localhost:3001"
  const response = await axios.get(`${apiUrl}/app/version`)
  return response
}

export default getBackendVersion