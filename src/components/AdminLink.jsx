import { ArrowRight, MoveRight } from 'lucide-react'
import Link from 'next/link'

const AdminLink = () => {
    return (
        <div className='flex w-full items-center border-y  border-b-[#E6E7E9] justify-center py-2'><Link className='px-4 py-1 bg-fuchsia-900 rounded-3xl text-white flex gap-2' href={"/admin"}>Visit Admin Page <ArrowRight /></Link>
            <hr /></div>
    )
}

export default AdminLink