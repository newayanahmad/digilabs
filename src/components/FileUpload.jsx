"use client"
import { generateReactHelpers } from '@uploadthing/react/hooks';
import { Inbox, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDropzone } from "react-dropzone"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FileUpload = () => {
    const { useUploadThing } = generateReactHelpers();
    const router = useRouter();

    const [uploading, setUploading] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { startUpload } = useUploadThing("imageUploader", {
        onClientUploadComplete: async (res) => {
            setIsLoading(false);
            setIsLoading(false)
            toast("Upload completed")
        },
        onUploadError: () => { },
        onUploadBegin: () => { },
    },)
    const { getRootProps, getInputProps } = useDropzone(
        {
            accept: { "application/image": [".png", ".svg", ".jpeg", ".jpg"] },
            maxFiles: 1,
            onDrop: async (acceptedFiles) => {
                if (acceptedFiles.length == 0) {
                    toast("Please select an Image", { type: "error" })
                    return
                }
                const file = acceptedFiles[0];
                if (file.size > 20 * 1024 * 1024) {
                    toast("too big", { type: "error" });
                    // bigger than 10mb!
                    return;
                }
                try {
                    setUploading(true);

                    const res = await startUpload(acceptedFiles)
                    if (!res) {
                        return toast(
                            "Something went wrong, no response received", { type: 'error' }
                        )
                    }
                    setUploading(false);

                } catch (error) {
                    toast(
                        "Something went wrong", { type: 'error' }
                    )
                    setUploading(false);
                }
            },
        }
    )
    return (
        <div className="p-2 bg-white  rounded-xl ">
            <ToastContainer />
            <div
                {...getRootProps({
                    className:
                        "border-dashed border-2 px-6  rounded-xl border-gray-300 border-[1px] cursor-pointer bg-fuchsia-200 py-2 flex justify-center items-center flex-col",
                })}
            >
                <input {...getInputProps()} />
                {uploading ? (
                    <>
                        {/* loading state */}
                        <Loader2 className="h-10 w-10 text-blue-500 animate-spin" />
                        <p className="mt-2 text-sm text-slate-400">
                            Hold tight, it won't take much...
                        </p>
                    </>
                ) : (
                    <>
                        <Inbox className="w-10 h-10 text-fuchsia-500" />
                        <p className="mt-2 text-sm text-slate-400">Drop Image Here or Click to upload</p>
                    </>
                )}
            </div>
        </div>
    )
}

export default FileUpload