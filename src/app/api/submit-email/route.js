import { EmailModel } from "@/db/Schema";
import connectToDatabase from "@/db/connect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const { email } = await req.json();
    if (!email) return NextResponse.json({ success: false, message: "Please enter an email address" }, { status: 400 });
    await connectToDatabase();
    const oldEmails = await EmailModel.find({ email: email.trim() })
    if (oldEmails.length == 0) {
        const newEmail = new EmailModel({
            email: email.trim()
        })
        await newEmail.save();
    }
    return NextResponse.json({ success: true, message: "Email submitted successfully" }, { status: 200 });
}