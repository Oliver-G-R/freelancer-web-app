export const getDeveloperByProjectId = async (idProject: string) => {
  try {
    const req = await fetch(`/api/developer?idProject=${idProject}`)
    const res = await req.json()
    return {
      data: res.data
    }
  } catch (error:any) {
    return{
      error: error.error
    }
  }
}