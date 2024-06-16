import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, price, description, image1, image2, image3, image4, imag5 } = body;

    const response = await prisma.shoes.create({
      data: {
        id,
        name,
        price,
        description,
        image1,
        image2,
        image3,
        image4,
        imag5
      }
    });

    return NextResponse.json(response, { status: 201 });
  } catch (error) {
    console.error('Error creating shoe:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
