"use server"

const { WebsiteMetadata } = require("@/db/Schema");
import { EmailModel } from "@/db/Schema";
import connectToDatabase from "@/db/connect"

const getMetadata = async () => {
    await connectToDatabase();
    const data = await WebsiteMetadata.findOne({});
    return data;
}

export const getEmails = async () => {
    await connectToDatabase();
    const emails = await EmailModel.find()
    return emails
}

export default getMetadata;