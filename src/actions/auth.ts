"use server";

import { auth, signIn, signOut } from "../auth";
import { AuthError } from "next-auth";
import { CreateClient, CreateDeveloper } from "@/models/User";
import { HashPassword } from "@/utils/hashPassword";
import db from '@/db';


export const loginAction = async (email:string, password:string) => {
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
    })


  } catch (error) {
    if(error instanceof AuthError) {
      return {
        error: error.cause?.err?.message
      }
    }

    return{
      error: 'An error occurred'
    }
  }
}

export const postProject = async ( data: any) => {
  try {

    const currentIdDeveloper = await auth()

    if(!currentIdDeveloper) return {
      error: 'No estas autorizado'
    }

    const { id } = currentIdDeveloper.user

    const developer = await db.developer.findUnique({
      where:{
        userId: id
      }
    })

    if(!developer) return {
      error: 'Desarrollador no encontrado'
    }

    //insert pro project
    await db.project.create({
      data:{
        price: parseFloat(data.price),
        name: data.name,
        description: data.description,
        developer:{
          connect:{
            id: developer.id 
          }
        }
      }
    })


  } catch (error) {

    console.log(error)
    return {
      error: 'An error occurred'
    }
  }

}

export const registerActionDeveloper = async ({
  name,
  nameUser,
  email,
  password,
  city,
  speciality
}: CreateDeveloper) => {
  try {
    const hashPassword = HashPassword.hash(password)
    const avatar = 'https://i.pravatar.cc/500'

    const userExist = await db.user.findUnique({
      where:{
        email
      }
    })

    if(userExist) return {
      error: 'El correo ya esta en uso'
    }

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

    await signIn('credentials', {
      email,
      password,
      redirect: false
    })

  } catch (error) {
    if(error instanceof AuthError) {
      return {
        error: error.cause?.err?.message
      }
    }

    if(error instanceof Error){
      return {
        error: error.message
      }
    }

    return{
      error: 'An error occurred'
    }
  }
}

export const registerActionClient = async ({
  name,
  nameUser,
  email,
  password
}: CreateClient) => {
  try {

    const hashPassword = HashPassword.hash(password)
    const avatar = 'https://i.pravatar.cc/500'

    const userExist = await db.user.findUnique({
      where:{
        email
      }
    })

    if(userExist) return {
      error: 'El correo ya esta en uso'
    }

    await db.$transaction(async (db) => {
      await db.user.create({
        data:{
          name,
          nameUser,
          email,
          password: hashPassword,
          role: 'CLIENT',
          avatar,
        }
      })
    })

    await signIn('credentials', {
      email,
      password,
      redirect: false
    })

  } catch (error) {
    if(error instanceof AuthError) {
      return {
        error: error.cause?.err?.message
      }
    }

    if(error instanceof Error){
      return {
        error: error.message
      }
    }

    return{
      error: 'An error occurred'
    }
  }
}
