import { ArrowRight, CreditCard, Expand } from 'lucide-react'
import React from 'react'

const SpendingDemo = () => {
    return (
        <span className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
            <div className="self-center text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">
                Elevating Card Programs with Cutting-Edge Technology
            </div>
            <div className="text-gray-500 text-center text-lg leading-7 self-center max-w-xl mt-4 max-md:max-w-full">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.
            </div>
            <span className="justify-center items-center self-center flex gap-2 mt-8 rounded-lg">
                <div className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
                    Compare all Pro features
                </div>
                <ArrowRight className='text-fuchsia-900' />
            </span>
            <div className=" mt-24 mb-12 max-md:max-w-full max-md:my-10 ">
                <div className="gap-5  flex max-md:flex-col items-center max-md:items-stretch max-md:gap-2">
                    <div className="flex flex-col  items-center max-md:w-full max-md:ml-0">
                        <img
                            loading="lazy"
                            src='/phone.png'
                            className="items-center overflow-hidden  rounded-lg  "
                        />
                    </div>
                    <div className="flex flex-col items-stretch  max-md:w-full ">
                        <div className="justify-center  items-center flex grow flex-col object-center w-full px-16 py-6 rounded-lg  max-md:max-w-full  max-md:px-5">
                            <div className="justify-center items-center border   flex w-[409px] max-md:w-[100%] object-contain max-w-full flex-col mr-4 mt-16 mb-9 p-7 rounded-xl border-solid border-purple-400 max-md:mr-2.5 max-md:mt-10 max-md:px-5">
                                <div className="items-stretch self-stretch flex justify-between gap-5">
                                    <span className="items-stretch flex flex-col">
                                        <div className="text-neutral-900 text-xl font-semibold leading-6 whitespace-nowrap">
                                            Spending
                                        </div>
                                        <span className="items-center flex mt-2 justify-between gap-1.5 ">
                                            <CreditCard className='text-sm h-4' />
                                            <div className="text-gray-500 max-md:text-xs text-sm font-medium leading-4 grow whitespace-nowrap self-start">
                                                9349 visa card
                                            </div>
                                        </span>
                                    </span>

                                    <Expand className='w-5' />
                                </div>
                                <span className="items-stretch flex gap-2.5 mt-7 self-start">
                                    <div className="text-neutral-900 max-md:text-base text-3xl font-medium leading-10 grow whitespace-nowrap">
                                        127.14
                                    </div>
                                    <div className="text-neutral-900 text-sm font-medium leading-4 self-center whitespace-nowrap my-auto">
                                        USD
                                    </div>
                                </span>
                                <span className="items-stretch self-stretch flex justify-between gap-2 md:gap-3 mt-2.5">
                                    <div className="text-gray-500 text-xs font-medium leading-4 whitespace-nowrap">
                                        vs last week
                                    </div>
                                    <div className="text-gray-500 text-xs font-medium leading-4 grow ">
                                        Last Purchased {"("}Feb 24 19:59 UTC-5{")"}
                                    </div>
                                </span>
                                <span className="self-stretch flex items-stretch justify-between gap-5 mt-9 pr-12 max-md:pr-5">
                                    <div className="text-gray-500 text-sm font-medium leading-4">
                                        400 USD
                                    </div>
                                    <div className="text-gray-500 text-sm font-medium leading-4 self-center my-auto">
                                        1000 USD
                                    </div>
                                    <div className="text-gray-500 text-sm font-medium leading-4 self-center my-auto">
                                        5000 USD
                                    </div>
                                </span>
                                <div className="items-stretch self-stretch flex gap-1 mt-3 pr-1.5">
                                    <div className="bg-fuchsia-900 flex w-[27%] shrink-0 h-3 flex-col rounded-l-xl" />
                                    <div className="bg-fuchsia-900 flex w-[20%] shrink-0 h-3 flex-col " />
                                    <div className="bg-[#EFE4F2] flex w-[20%] shrink-0 h-3 flex-col " />
                                    <div className="bg-[#EFE4F2] flex w-[27%] shrink-0 h-3 flex-col rounded-r-xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </span>
    )
}

export default SpendingDemo