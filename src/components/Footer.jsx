import Link from "next/link";

function Footer() {
    return (
        <div className="justify-center items-center border-t-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-20 py-11 border-t border-solid max-md:max-w-full max-md:px-5">
            <span
                className="text-transparent bg-clip-text bg-linear-gradient animate-gradient-x font-extrabold text-xl max-w-full my-auto"

            >Mode UI</span>
            <span className="self-center text-gray-500 text-center text-base font-medium leading-7 max-w-lg mt-5 max-md:max-w-full">
                Mode UI is a comprehensive design system that empowers designers and
                developers to create cohesive and visually stunning user interfaces
                across various platforms and devices
            </span>
            <div className="bg-zinc-100 self-stretch w-full shrink-0 h-px mt-16 mx-8 max-md:mr-2.5 max-md:mt-10" />
            <div className="items-start self-center max-md:justify-normal flex justify-around gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <div className="items-stretch flex grow basis-[0%] flex-col">
                    <Link href="/" className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Company
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        About us
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Pricing
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Contact us
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Features
                    </Link>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                    <Link href="/" className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Product
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Figma design system
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Ios kit
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Android kit
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Wireframe
                    </Link>
                </div>
                <div className="items-stretch flex grow basis-[0%] flex-col">
                    <Link href="/" className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Resources
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Templates
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Landing pages
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Documentation
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Comp library
                    </Link>
                </div>
                <div className="items-stretch flex  basis-[0%] flex-col">
                    <Link href="/" className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Legal
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Privacy policy
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Terms & Conditions
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Disclaimer
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Affiliate programme
                    </Link>
                </div>
                <div className="items-stretch flex basis-[0%]  flex-col">
                    <Link href="/" className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Support
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Help centre
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Raise ticket
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Report
                    </Link>
                    <Link href="/" className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Refund
                    </Link>
                </div>
            </div>
            <div className="justify-between items-stretch self-center flex w-[108px] max-w-full gap-5 mt-24 max-md:mt-10">
                <img
                    loading="lazy"
                    src="/github.svg"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                    loading="lazy"
                    src="/linkedin.svg"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
                <img
                    loading="lazy"
                    src="/discord.svg"
                    className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                />
            </div>
            <div className="text-gray-500 text-center text-sm leading-5 self-stretch mt-6 mx-8 max-md:max-w-full max-md:mr-2.5">
                © 2023 Mode UI Inc. All Rights Reserved.
            </div>
        </div>
    );
}


export default Footer;