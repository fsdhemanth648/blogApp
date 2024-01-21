import prisma from "@/utils/dbConnect"
import { NextResponse } from 'next/server'

export const GET = async () => {
    try {
        const categories = await prisma.Category.findMany();
        return new NextResponse(JSON.stringify(categories, {
            status: 200, headers: {
                'Content-Type': 'application/json'
            }
        }))
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Couldn't fetch categories" }, {
            status: 500, headers: {
                'Content-Type': 'application/json'
            }
        }))
    }
}