"use client";
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <section className="flex w-full flex-col items-center pt-12 px-20 max-md:max-w-full max-md:px-5">
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: .5, duration: .5 }} className="text-fuchsia-900 text-center text-base font-medium leading-5 mt-11 max-md:max-w-full max-md:mt-10">
                Seamless experience
            </motion.span>
            <motion.h1 initial={{ opacity: 0, y: -100, scale: .6 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: .25, duration: 1 }} className="text-neutral-900 text-center text-6xl font-semibold leading-[72px] max-w-[832px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                <span className='text-transparent bg-clip-text bg-linear-gradient animate-gradient-x'>Unleashing</span> the Next Generation of <span className='text-transparent bg-clip-text bg-linear-gradient animate-gradient-x'>Card Solutions</span>
            </motion.h1>
            <p className="text-gray-500 text-center text-lg leading-7 max-w-[648px] mt-4 max-md:max-w-full">
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <div
                className="justify-center items-stretch bg-fuchsia-900 flex gap-2 mt-8 p-4 rounded-lg"
                role="group"
                aria-label="Unlock your Card"
            >
                <button
                    className="text-white text-center text-base font-medium leading-5 grow whitespace-nowrap"
                    type="button"
                >
                    Unlock your Card
                </button>
                <ArrowRight className='text-white' />
            </div>
            <p className="text-gray-500 text-center text-sm font-medium leading-5 mt-4 max-md:max-w-full">
                *No credit card required
            </p>
        </section>
    )
}

export default Hero