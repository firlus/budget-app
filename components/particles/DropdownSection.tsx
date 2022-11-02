import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline"
import { ComponentProps, ComponentType, MouseEventHandler, ReactNode, useState } from "react"

interface DropdownSectionProps {
    title: ReactNode
    className?: string
    children: ReactNode
    actions?: DropdownSectionAction[]
}

interface DropdownSectionAction {
    icon: ComponentType<ComponentProps<'svg'>>
    onClick: MouseEventHandler<HTMLDivElement>
}

export default function DropdownSection({ title, children, className, actions }: DropdownSectionProps) {
    const [isExpanded, setExpanded] = useState(false)
    return (
        <div className={`w-full flex flex-col rounded-3xl ${!isExpanded && 'hover:bg-slate-200'} ${isExpanded && 'border-slate-200 border-2'} ${className}`}>
            <div className="flex w-full py-4 px-6 cursor-pointer justify-between" onClick={() => setExpanded(!isExpanded)} >
                {title}
                <div className="flex">
                    {actions?.map(action =>
                        <div onClick={action.onClick}>
                            <action.icon width={24} height={24} className="mr-2" />
                        </div>)}
                    {isExpanded ? <ArrowUpIcon height={24} width={24} /> : <ArrowDownIcon height={24} width={24} />}
                </div>
            </div>
            {isExpanded &&
                <div className="w-full py-4 px-6">
                    {children}
                </div>
            }
        </div>
    )
}