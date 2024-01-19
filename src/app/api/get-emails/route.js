import { EmailModel } from "@/db/Schema";
import connectToDatabase from "@/db/connect"
import { NextResponse } from "next/server";

export const GET = async (req) => {
    await connectToDatabase();
    const emails = await EmailModel.find()
    return NextResponse.json(emails)
}