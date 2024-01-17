
function Footer() {
    return (
        <span className="justify-center items-center border-t-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-20 py-11 border-t border-solid max-md:max-w-full max-md:px-5">
            <span
                className="font-extrabold text-xl object-contain object-center  fill-neutral-900 overflow-hidden shrink-0 max-w-full my-auto"

            >Mode UI</span>
            <div className="self-center text-gray-500 text-center text-base font-medium leading-7 max-w-lg mt-5 max-md:max-w-full">
                Mode UI is a comprehensive design system that empowers designers and
                developers to create cohesive and visually stunning user interfaces
                across various platforms and devices
            </div>
            <div className="bg-zinc-100 self-stretch w-full shrink-0 h-px mt-16 mx-8 max-md:mr-2.5 max-md:mt-10" />
            <div className="items-stretch self-center flex justify-around gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Company
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        About us
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Pricing
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Contact us
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Features
                    </div>
                </span>
                <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Product
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Figma design system
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Ios kit
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Android kit
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Wireframe
                    </div>
                </span>
                <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Resources
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Templates
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Landing pages
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Documentation
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Comp library
                    </div>
                </span>
                <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Legal
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Privacy policy
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Terms & Conditions
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Disclaimer
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Affiliate programme
                    </div>
                </span>
                <span className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-zinc-800 text-base font-bold leading-5 whitespace-nowrap">
                        Support
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-6">
                        Help centre
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Raise ticket
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Report
                    </div>
                    <div className="text-zinc-700 text-base font-medium leading-5 whitespace-nowrap mt-4">
                        Refund
                    </div>
                </span>
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
        </span>
    );
}


export default Footer;