import db from '../../../../db';
import { NextResponse } from 'next/server';
interface Params {
  params: { id: string };
}

export async function Get(req:Request, {params}:Params){
  try {
    const { id } = params;

    const developer  = await db.developer.findUnique({
      where:{
        id
      }
    })
  } catch (error) {
    NextResponse.json({status: 500})
  }
}