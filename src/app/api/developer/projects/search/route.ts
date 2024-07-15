import { NextRequest, NextResponse } from "next/server";
import db from '@/db';

export async function GET(request: NextRequest) {
  try {
    const searchQuery = request.nextUrl.searchParams.get('q')
    // Verifica si el parámetro q existe en la consulta
    if (!searchQuery) {
      return NextResponse.json({ message: "No se ha enviado una búsqueda válida" }, { status: 400 });
    }


     const projects = await db.project.findMany({
       where: {
         OR: [
           {
             name: {
               contains: searchQuery,
             }
           },
           {
             description: {
               contains: searchQuery,
             }
           }
         ]
       },
       select:{
        description:true,
        id:true,
        developer:{
          select:{
            city:true,
            user:true
          }
        }
       }
     }) 

    const mapProjects = projects.map((project) => {
      return {
        id: project.id,
        nameDeveloper: project.developer.user.name,
        description: project.description,
        city: project.developer.city,
        avatar: project.developer.user.avatar,
      };
    });

     if(projects.length === 0) {
       return NextResponse.json({message: "No se encontraron proyectos"},{ status: 404 })
     }

    return NextResponse.json({data: mapProjects},{ status: 200 })
  } catch (error) {
    console.log(error)
    return NextResponse.json({message: "Error en el servidor"},{ status: 500 })
  }
}