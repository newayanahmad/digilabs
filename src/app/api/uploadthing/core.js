import { WebsiteMetadata } from "@/db/Schema";
import connectToDatabase from "@/db/connect";
import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();


// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    // Define as many FileRoutes as you like, each with a unique routeSlug
    imageUploader: f({ image: { maxFileSize: "20MB" } })
        // Set permissions and file types for this FileRoute
        .middleware(async ({ req }) => {
            // This code runs on your server before upload

            // If you throw, the user will not be able to upload
            // if (!user) throw new Error("Unauthorized");

            // Whatever is returned here is accessible in onUploadComplete as `metadata`
            return { userId: "DigiLabs" };
        })
        .onUploadComplete(async ({ metadata, file }) => {
            // This code RUNS ON YOUR SERVER after upload
            const file_name = file.url;
            await connectToDatabase();
            await WebsiteMetadata.updateMany({}, {
                $set: {
                    logo_url: file_name,
                }
            })

            // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
            return { uploadedBy: metadata.userId };
        }),
}
