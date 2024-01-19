import { getEmails } from "@/app/actions";
import { MailCheck } from "lucide-react";
import Link from "next/link";

const EmailList = async () => {
    const emails = await getEmails();
    return (
        <div className="email mt-5 flex flex-col items-center justify-center">
            <span className="font-bold mb-4 text-2xl">List of Emails:</span>
            <div className="flex flex-col gap-2">
                {emails.length == 0 ? <span>No emails yet!</span> : emails.map((email, index) => <Link key={index} href={`mailto://${email.email}`} className="bg-fuchsia-200 px-4 py-2 rounded-xl flex gap-2 items-center text-blue-600"><MailCheck />{email.email}</Link>)}
            </div>
        </div>
    )
}

export default EmailList