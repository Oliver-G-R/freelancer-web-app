import db from '../../../db';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest){
  try {
    const nameUser = req.nextUrl.searchParams.get('nameUser');

    if(!nameUser){
      return NextResponse.json({message: "Ingrese el nombre del usuario"}, {status: 404})
    }



    const user = await db.developer.findFirst({
      where:{
        user:{
          nameUser
        }
      },
      include:{
        user: true,
        projects: true
      }
    })

    if(!user){
      return NextResponse.json({message: "Usuario no encontrado"}, {status: 404})
    }

    return NextResponse.json({data: user}, {status: 200})
    
  } catch (error) {
    return NextResponse.json({message: "Error en el servidor"}, {status: 500})
  }
}