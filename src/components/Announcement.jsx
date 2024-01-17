import React from 'react'

const AnnouncementComponent = () => {
    return (
        <section className="justify-center  items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full  px-16 py-2 border-b border-solid max-md:max-w-full max-md:px-5">
            <span className="justify-center items-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap">
                <span className="text-zinc-700 text-center text-xs font-medium leading-4 whitespace-nowrap justify-center items-stretch border border-[#E6E7E9] bg-zinc-100 px-2 py-1 rounded-[240px] border-solid">
                    Announcement
                </span>
                <div className="text-neutral-900 text-center text-sm font-medium leading-5 self-center grow my-auto max-md:max-w-full">
                    We are happy to announce that we raise $2 Million in Seed Funding
                </div>
            </span>
        </section>
    )
}

export default AnnouncementComponent
