"use client";

import FileUpload from "@/components/FileUpload";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function AdminComponent({ children }) {
    const [text, setText] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/change-text", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });
        const data = await res.json();
        if (data.success) {
            toast("Text changed successfully")
            setText("")
            return;
        }
        toast(data.message);
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-normal ">
            <ToastContainer />
            <h1 className="text-4xl font-bold my-8">Admin</h1>
            <div className="navbar flex flex-col w-full items-center justify-center ">
                <span className="font-bold text-2xl">Change Navbar Logo</span>
                <FileUpload />
            </div>
            <div className="navbar flex flex-col items-center justify-center gap-4">
                <span className="font-bold text-2xl">Change Button Text</span>
                <form onSubmit={handleSubmit} className="gap-4 max-md:flex-col flex">
                    <input type="text" name="text" value={text} onChange={e => setText(e.target.value)} id="text" placeholder="New Text" className="outline-none bg-fuchsia-200 px-4 py-2 rounded-md" />
                    <input type="submit" value="Change" className="cursor-pointer text-white px-4 py-2 rounded-lg bg-fuchsia-500" />
                </form>
            </div>
            {children}
        </main>
    );
}