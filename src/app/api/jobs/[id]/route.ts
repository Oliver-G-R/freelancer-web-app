import { Job } from "@/models/Job";
import data from "../../data.json";
import { NextResponse } from "next/server";
interface Params {
  params: {
    id: string
  }
}
export async function GET(req: Request, { params }: Params) {
  const { id } = params
  const job = data.find((job: Job) => job.id === id)
  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 })
  }
  return NextResponse.json(job, { status: 200 })
}