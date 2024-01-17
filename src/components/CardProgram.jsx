"use client";
import { ArrowRight, Globe, Key, Lock } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CardProgram = () => {
    return (
        <section className="justify-center items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
            <div className="div text-neutral-900 text-center text-4xl font-semibold leading-10 max-w-[704px] mt-12 max-md:max-w-full max-md:mt-10">Elevating Card Programs with Cutting-Edge Technology</div>
            <p className="text-gray-500 text-center text-lg leading-7 self-center max-w-xl mt-4 max-md:max-w-full">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/" className="justify-center items-center self-center flex gap-2 mt-8 rounded-lg">
                <span className="text-fuchsia-900 text-center text-base font-medium leading-5 grow whitespace-nowrap">
                    Compare all Pro features
                </span>
                <ArrowRight className='text-fuchsia-900' />
            </Link>
            <div className="self-stretch mt-24 mb-12 mx-8 p-4 max-md:max-w-full max-md:my-10">
                <div className="group flex max-md:flex-col max-md:items-center justify-center max-md:gap-0">
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="input-group flex flex-col items-center w-[33%] max-md:w-full max-md:ml-0">
                        <div className="input-wrapper justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                            <Globe className='text-fuchsia-700' />
                        </div>
                        <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">Globally Accepted</div>
                        <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="input-group flex flex-col items-center w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="input-wrapper justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                            <Key className='text-fuchsia-700' />
                        </div>
                        <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">Biometric Integrated</div>
                        <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, scale: .7 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: .25, duration: .5 }} className="input-group flex flex-col items-center w-[33%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="input-wrapper justify-center items-center bg-gray-100 self-center flex aspect-square flex-col w-14 h-14 px-4 rounded-[240px]">
                            <Lock className='text-fuchsia-700' />
                        </div>
                        <div className="text-neutral-900 text-center text-base font-medium leading-5 whitespace-nowrap mt-4">Fully Secured</div>
                        <div className="text-gray-500 text-center text-sm font-medium leading-6 self-center max-w-xs mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CardProgram