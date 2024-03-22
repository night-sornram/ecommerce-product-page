import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function GET() {
  return Response.json(await prisma.item.findMany())
}

export async function POST(req: Request) {
  try {
    const { name, price , quantity  } = await req.json()
    const newCart = await prisma.cart.create({
        data: {
        },
      });
    const newItem = await prisma.item.create({
        data: {
          name,
          price ,
          quantity ,
          cartId: newCart.id, // Reference the newly created cart
        },
      });
    return NextResponse.json(newCart)
  } catch (error) {
    return new NextResponse(error as BodyInit, {
      status: 500,
    })
  }
}
