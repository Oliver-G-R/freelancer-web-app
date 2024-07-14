export const GetAllProjects = async () => {
  try {
    const req = await fetch('/api/developer/projects')
    const res = await req.json()

    return {
      data: res.data
    }
  } catch (error:any) {
    return {
      error: error.error
    } 
  }
}

export const GetProjectById = async (id:string) => {
  try {
    const req = await fetch(`/api/developer/projects/${id}`)
    const res = await req.json()


    return {
      data: res.data
    }
  } catch (error:any) {
    return {
      error: error.error
    } 
  }
}