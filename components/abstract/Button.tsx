import { MouseEventHandler } from "react"

interface ButtonProps {
    children: React.ReactNode,
    className?: string,
    border?: boolean
    size?: "lg" | "md",
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, className, size, border, onClick }: ButtonProps) {
    const textSize = size === "lg" ? " text-xl" : ""
    const borderClasses = border ? " border-2" : ""
    const classes = 'rounded-full text-neutral-600 border-neutral-200 hover:bg-neutral-200 ' + className + textSize + borderClasses
    return <button className={classes} onClick={onClick}>{children}</button>
}