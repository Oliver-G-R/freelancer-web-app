import { Job } from "@/models/Job";
import { NextResponse } from "next/server";
import data from "../data.json";


export async function GET() {
  return NextResponse.json(data, { status: 200 })
}
