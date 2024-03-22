import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } },
  ) {
    try {
      return Response.json(await prisma.item.delete({
        where: { id: params.id },
      }))
    } catch (error) {
      return new Response(error as BodyInit, {
        status: 500,
      })
    }
  }