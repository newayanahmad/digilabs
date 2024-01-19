"use client"
import { MailCheck } from 'lucide-react'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Email = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const valid = email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
        if (!valid) {
            toast("Invalid Email", {
                type: "error"
            })
            return
        }
        const res = await fetch("/api/submit-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email })
        });
        const data = await res.json();
        if (data.success) {

            toast(data.message || "Email submitted successfully")
            setEmail("")
        }
        else {
            toast(data.message || "Something went wrong", {
                type: "error"
            })
        }

    }

    return (
        <section className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
            <ToastContainer />
            <span className="text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
                Unlock Limitless Possibilities with Our New Card Solutions
            </span>
            <div className="justify-center items-center self-stretch flex flex-col mt-8 mb-12 mx-8 px-16 max-md:max-w-full max-md:mr-2.5 max-md:mb-10 max-md:px-5">
                <form onSubmit={handleSubmit} className="flex max-md:flex-col items-center justify-center gap-2">

                    <div
                        className="justify-between max-md:w-[100%] items-center bg-zinc-100 flex gap-2 px-4 py-3 rounded-lg text-gray-500 text-center text-base font-medium leading-5 grow whitespace-nowrap"

                    >
                        <MailCheck className='text-gray-500 h-5' />
                        <input type="email" name='email' required={true} value={email} onChange={e => setEmail(e.target.value)} id='email' placeholder='Your Email Here' className='bg-transparent outline-none p-px' />
                    </div>
                    <button type='submit'
                        onClick={handleSubmit}
                        className="justify-between  max-md:w-[100%]  items-center bg-fuchsia-900 flex gap-2 px-4 text-white text-center text-base font-medium leading-5 grow whitespace-nowrap py-3 rounded-lg"

                    >
                        Submit Email
                        <MailCheck className='text-white' />
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Email