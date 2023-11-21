import axios from "axios"
const postIdInfo = 
async (id:string) => {
  const request = `
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws/">
      <soapenv:Header/>
      <soapenv:Body>
         <ws:checkID>
            <arg0>${id}</arg0>
         </ws:checkID>
      </soapenv:Body>
    </soapenv:Envelope>`

  const response = await axios.post(
    'http://ws.pcw.com.do:7711/ws/accessControl',
    request,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    },
  )
  return response
}

export default postIdInfo