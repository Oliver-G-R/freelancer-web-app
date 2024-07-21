import { CreateClient } from "@/models/User";

export const createClient = async (client:CreateClient) => {
  try {
    const req = await fetch('/api/client', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(client)
    })
    const resp = await req.json()

    if(req.status !== 200){
      return{
        error: resp.message
      }
    }

    return{
      data: resp.data
    }

  } catch (error:any) {
    return{
      error: error.error
    }
  }
}