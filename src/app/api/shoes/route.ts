import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const response = await prisma.shoes.findMany();
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching shoes:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
