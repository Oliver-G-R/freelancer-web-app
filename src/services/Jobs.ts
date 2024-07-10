export const GetAllJobs = async () => {
  try {
    const req = await fetch('/api/jobs')
    const res = await req.json()
    return {
      data: res
    }
  } catch (error:any) {
    return {
      error: error.error
    } 
  }
}