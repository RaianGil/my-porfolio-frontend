import axios from "axios"
const getProjects = 
async () => {
  const apiUrl = process.env.API_URL || "http://localhost:3001"
  const response = await axios.get(`${apiUrl}/projects`)
  return response
}

export default getProjects