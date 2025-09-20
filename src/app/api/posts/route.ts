import { NextResponse } from "next/server";
import { Index, Store } from "@/services/postServices";

/* route functions Index */
export async function GET() {
    const allPosts = await Index();
    return NextResponse.json(allPosts);
}

/* route functions Store */
export async function POST (req: Request) {
    const body = await req.json();
    const newPost = await Store(body);
    return NextResponse.json(newPost, {status: 201});
}


