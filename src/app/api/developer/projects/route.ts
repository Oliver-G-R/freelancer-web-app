import { NextResponse } from "next/server";
import db from "../../../../../prisma/db";

export async function GET() {
  try {
    const projects = await db.project.findMany({
      select: {
        name: true,
        description: true,
        id: true,
        developer: {
          select: {
            user: {
              select: {
                name: true,
                avatar: true,
              },
            },
            city: true,
          },
        },
      },
      distinct: ['developerId']
    });

    const mapProjects = projects.map((project) => {
      return {
        id: project.id,
        nameDeveloper: project.developer.user.name,
        title: project.name,
        description: project.description,
        city: project.developer.city,
        avatar: project.developer.user.avatar,
      };
    });

    console.log(projects)

    return NextResponse.json({data: mapProjects},{ status: 200 })
  } catch (error) {
    return NextResponse.json({ status: 500 })
  }
}

