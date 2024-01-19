import { WebsiteMetadata } from "@/db/Schema";
import connectToDatabase from "@/db/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await connectToDatabase();
    const data = await WebsiteMetadata.findOne({});
    return NextResponse.json(data);
}