import { NextRequest, NextResponse } from "next/server";
import db from '../../../../prisma/db';
import { CreateDeveloper } from "@/models/User";
import { HashPassword } from "@/utils/hashPassword";

export async function GET(req:NextRequest){
  try {
    
    const queryIdProjet = req.nextUrl.searchParams.get('idProject')
    
    if(queryIdProjet){
      const developer = await db.developer.findFirst({
        where:{
          projects:{
            some:{
              id: queryIdProjet 
            }
          }
        },
        include:{
          user: true
        }
      })

      if(!developer) return NextResponse.json({message: 'Desarrollador no encontrado'}, {status: 404})
        
      return NextResponse.json({data: developer}, {status: 200})
    }

    const allDevelopers = await db.developer.findMany({
      include:{
        user: true
      }
    })


    return NextResponse.json({data: allDevelopers}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: 'Error en el servidor'}, {status: 500})
  }
}

export async function POST(req:Request){
  try {
    const data = await req.json()
    const {name, nameUser, email, password, city, speciality } = data as CreateDeveloper
    const hashPassword = HashPassword.hash(password)
    const avatar = 'https://i.pravatar.cc/500'
    await db.$transaction(async (db) => {
      const user = await db.user.create({
        data:{
          name,
          nameUser,
          email,
          password: hashPassword,
          role: 'DEVELOPER',
          avatar,
        }
      })

      await db.developer.create({
        data:{
          city,
          speciality,
          user:{
            connect:{
              id: user.id
            }
          }
        }
      })
    })

    return NextResponse.json({message: 'Desarrollador creado'}, {status: 200})
  } catch (error) {
    NextResponse.json({message: 'Error al crear el proyecto'}, {status: 500})
  }
}