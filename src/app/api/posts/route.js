import { getAuthSession } from "@/utils/authOptions";
import prisma from "@/utils/dbConnect"
import { NextResponse } from 'next/server'

export const GET = async (req) => {
    const { searchParams } = new URL(req.url);
    const page = searchParams.get("page")
    const cat = searchParams.get("cat")
    const POST_PER_PAGE = 2;

    const query = {
        take: POST_PER_PAGE,
        skip: POST_PER_PAGE * (page - 1),
        where: {
            ...(cat && {
                catSlug: cat
            })
        }
    }

    try {
        const [posts, count] = await prisma.$transaction(
            [
                prisma.post.findMany(query),
                prisma.post.count({ where: query.where }),
            ]
        )
        return new NextResponse(JSON.stringify({ posts, count }, {
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

//CREATE A POST
export const POST = async (req) => {
    const session = await getAuthSession()
    if (!session) {
        return new NextResponse(JSON.stringify({ message: "Not Authenticated" }, {
            status: 401, headers: {
                'Content-Type': 'application/json'
            }
        }))
    }
    try {
        const body = await req.json();
        const post = await prisma.post.create({
            data: {
                ...body,
                userEmail: session.user.email
            }
        })
        return new NextResponse(JSON.stringify(post, {
            status: 200,
            message: "Post Saved!",
            headers: {
                'Content-Type': 'application/json'
            },
        }))
    } catch (err) {
        return new NextResponse(JSON.stringify({ message: "Post not Saved!" }, {
            status: 500, headers: {
                'Content-Type': 'application/json'
            }
        }))
    }
}