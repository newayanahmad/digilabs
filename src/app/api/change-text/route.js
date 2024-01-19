import { WebsiteMetadata } from "@/db/Schema";
import connectToDatabase from "@/db/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { text } = await req.json();
    if (!text) return NextResponse.json({ succes: false, message: "No text provided" });
    await connectToDatabase()
    await WebsiteMetadata.updateMany({}, { $set: { button_text: text } })
    return NextResponse.json({ success: true, message: "Successfully changed text" });
}