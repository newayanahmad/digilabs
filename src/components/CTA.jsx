import { CreditCard, Headphones } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
            <span className="text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
                Unlock Limitless Possibilities with Our New Card Solutions
            </span>
            <div className="justify-center items-center self-stretch flex flex-col mt-8 mb-12 mx-8 px-16 max-md:max-w-full max-md:mr-2.5 max-md:mb-10 max-md:px-5">
                <div className="flex max-md:flex-col items-center justify-center gap-2">
                    <Link
                        href="/"
                        className="justify-between  max-md:w-[100%]  items-center bg-fuchsia-900 flex gap-2 px-4 text-white text-center text-base font-medium leading-5 grow whitespace-nowrap py-3 rounded-lg"

                    >
                        Unlock your card
                        <CreditCard className='text-white' />
                    </Link>
                    <Link
                        href="/"
                        className="justify-between max-md:w-[100%] items-center bg-zinc-100 flex gap-2 px-4 py-3 rounded-lg text-gray-500 text-center text-base font-medium leading-5 grow whitespace-nowrap"

                    >Customer support
                        <Headphones className='text-gray-500 h-5' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA