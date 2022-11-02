import { ArrowUpTrayIcon, Cog6ToothIcon, FunnelIcon, PlusIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react"
import IconButton from "./particles/IconButton";
import TextButton from "./particles/TextButton";
import TextIconButton from "./particles/TextIconButton";

interface BaseProps {
    headline: string
    children: ReactNode
}


export default function Base({ headline, children }: BaseProps) {
    return <main className='w-[900px] mx-auto mt-10 flex flex-col'>
        <h1>{headline}</h1>
        <div className="flex justify-between mb-12">
            <div>
                <TextButton content='Dashboard' className='mr-2' border={true} />
                <TextButton content='This week' className='mr-2' border={true} />
                <TextButton content='This month' className='mr-2' border={true} />
                <TextIconButton Icon={FunnelIcon} content="Filter" className='mr-2' border={true} />
            </div>
            <div>
                <IconButton Icon={PlusIcon} className='ml-2' border={true} />
                <IconButton Icon={ArrowUpTrayIcon} className='ml-2' border={true} />
                <IconButton Icon={Cog6ToothIcon} className='ml-2' border={true} />
            </div>
        </div>
        {children}
    </main>
}