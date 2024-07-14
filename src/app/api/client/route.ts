import db from '../../../../prisma/db';
import { CreateClient } from '@/models/User';
import { HashPassword } from '@/utils/hashPassword';
import { NextResponse } from 'next/server';

export async function POST(req:Request){
  try {
    const data = await req.json()
    //TODO: agregar url de avatar random
    const avatar = 'https://i.pravatar.cc/500'
    const {name, nameUser, email, password, } = data as CreateClient
    const hashPassword = HashPassword.hash(password)
    
    await db.$transaction(async (db) => {
      const user = await db.user.create({
        data:{
          name,
          nameUser,
          email,
          password: hashPassword,
          role: 'CLIENT',
          avatar,
        }
      })

      await db.client.create({
        data:{
          user:{
            connect:{
              id: user.id
            }
          }
        }
      })
    })

    return NextResponse.json({message: 'Cliente creado correctamente'}, {status: 200})
  } catch (error) {
    return NextResponse.json({message: 'Error al crear el cliente'}, {status: 500})
  }
}