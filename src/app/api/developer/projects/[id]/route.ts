import db from '../../../../../../prisma/db';
import { NextResponse } from 'next/server';
interface Params {
  params: { id: string };
}
export async function GET(req:Request, { params }:Params) {
  const { id } = params;
  try {
    const project = await db.project.findUnique({
      where: {
        id,
      },
    });


    if (!project) {
      return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ data: project }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500 });
  }
}