import prisma from "@/utils/dbConnect"
import { NextResponse } from 'next/server'

//GET SINGLE POST
export const GET = async (req, { params }) => {
    const { slug } = params;
    try {
        //const post = await prisma.post.findUnique
        const post = await prisma.post.update({
            where: { slug },
            data: { views: { increment: 1 } },
            include: { user: true }
        })
        return new NextResponse(JSON.stringify(post, {
            status: 200, headers: {
                'Content-Type': 'application/json'
            }
        }))
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Couldn't fetch posts" }, {
            status: 500, headers: {
                'Content-Type': 'application/json'
            }
        }))
    }
}