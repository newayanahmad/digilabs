
const CompanyList = () => {
    return (
        <div className="justify-center items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
            <div className="justify-evenly items-center flex w-full gap-4 my-12 p-2 max-md:max-w-full flex-wrap max-md:my-10">
                <div className=" ">
                    <img loading="lazy" src="/nuxt.svg" alt="" />
                </div>

                <div className="aspect-[2.83] object-contain object-center w-[68px] overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/miro.svg" alt="" />
                </div>

                <div className="aspect-[5.17] object-contain object-center w-[124px] justify-center items-center overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/lottie.png" alt="" />
                </div>

                <div className="aspect-[4.42] object-contain object-center w-[106px] overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/wise.png" alt="" />
                </div>

                <div className="aspect-[4.08] object-contain object-center w-[98px] overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/dribble.svg" alt="" />
                </div>

                <div className="aspect-[5] object-contain object-center w-[120px] justify-center items-center overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/kinsto.png" alt="" />
                </div>

                <div className="aspect-[4.25] object-contain object-center w-[102px] overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/angel.svg" alt="" />
                </div>

                <div className="aspect-[5.5] object-contain object-center w-[132px] overflow-hidden shrink-0 max-w-full">
                    <img loading="lazy" src="/behance.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default CompanyList