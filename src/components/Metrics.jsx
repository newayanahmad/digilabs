"use client";
import { motion } from "framer-motion";

function Metrics() {
    return (
        <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="w-full max-w-[1216px] my-12 p-4 max-md:max-w-full max-md:my-10">
                <div className="gap-5 flex max-md:flex-col justify-center flex-wrap max-md:items-stretch max-md:gap-0">
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
                        <span className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                            <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                                2 Million
                            </div>
                            <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                                Customers
                            </div>
                            <div className="text-gray-500 text-center text-base leading-7 mt-2">
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            </div>
                        </span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                        <span className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                            <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                                1K
                            </div>
                            <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                                Downloads
                            </div>
                            <div className="text-gray-500 text-center text-base leading-7 mt-2">
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            </div>
                        </span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                        <span className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                            <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                                $73 Million
                            </div>
                            <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                                Transaction
                            </div>
                            <div className="text-gray-500 text-center text-base leading-7 mt-2">
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            </div>
                        </span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="flex flex-col items-stretch w-1/5 ml-5 max-md:w-full max-md:ml-0">
                        <span className="justify-center items-stretch flex grow flex-col max-md:mt-10">
                            <div className="text-fuchsia-900 text-center text-5xl font-semibold leading-[56.16px] whitespace-nowrap max-md:text-4xl">
                                2.0
                            </div>
                            <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">
                                Latest Version
                            </div>
                            <div className="text-gray-500 text-center text-base leading-7 mt-2">
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            </div>
                        </span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}


export default Metrics;