import { ReactNode } from "react";

interface PillProps {
    children: ReactNode
}

export default function Pill({ children }: PillProps) {
    return <div className="px-3 py-2 rounded-full border-2 border-slate-2">{children}</div>
}