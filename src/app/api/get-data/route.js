import { WebsiteMetadata } from "@/db/Schema";
import connectToDatabase from "@/db/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    await connectToDatabase();
    const data = await WebsiteMetadata.findOne({});
    console.log(data);
    return NextResponse.json(data);
}