import { ArrowDown, ChevronDown, LogIn, Menu } from "lucide-react";

function MyHeader(props) {
    return (
        <header
            className="justify-center items-center border-b-[color:var(--Neutral-1000,#E6E7E9)] bg-white flex w-full flex-col px-16 py-5 border-b border-solid max-md:max-w-full max-md:px-5"
            role="banner"
        >
            <div
                className="justify-between items-center flex w-[1216px] max-w-full gap-5 pl-4 py-0.5 max-md:flex-wrap"
                role="navigation"
            >
                <span
                    className="font-extrabold text-xl object-contain object-center  fill-neutral-900 overflow-hidden shrink-0 max-w-full my-auto"

                >Mode UI</span>
                <div
                    className="items-stretch hidden md:flex self-stretch justify-between gap-5 p-2 max-md:max-w-full max-md:flex-wrap"
                    role="menu"
                >
                    <span className="items-stretch flex justify-between gap-2">
                        <div className="text-zinc-700 text-center text-base font-medium leading-5 grow whitespace-nowrap">
                            Card access
                        </div>
                        <ChevronDown />
                    </span>
                    <div className="text-zinc-700 text-center text-base font-medium leading-5">
                        Banking
                    </div>
                    <div className="text-zinc-700 text-center text-base font-medium leading-5">
                        Processing
                    </div>
                    <div className="text-zinc-700 text-center text-base font-medium leading-5">
                        About
                    </div>
                    <div className="text-zinc-700 text-center text-base font-medium leading-5">
                        Carrier
                    </div>
                    <div className="text-zinc-700 text-center text-base font-medium leading-5 whitespace-nowrap">
                        Contact
                    </div>
                </div>
                <div
                    className="justify-between items-stretch bg-zinc-100 self-stretch flex gap-2 px-4 py-2 rounded-lg"
                    role="menu"
                >
                    <button
                        className="text-gray-500 text-center text-base font-medium leading-5"
                        aria-label="Login"
                    >
                        Login
                    </button>
                    <LogIn
                        className=" aspect-square text-gray-500 object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"

                    />
                </div>
                <Menu className="block md:hidden" />
            </div>
        </header>
    );
}

export default MyHeader