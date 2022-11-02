import { ComponentProps, ComponentType, ReactElement } from "react";
import Button from "./../abstract/Button";

interface TextIconButtonProps {
    className?: string
    content: string
    Icon: ComponentType<ComponentProps<'svg'>>
    size?: "lg" | "md"
    margin?: "lg" | "md"
    border?: boolean
}

export default function TextIconButton({ className, Icon, content, size, margin, border }: TextIconButtonProps) {
    const classes = "py-2 px-3 " + className;
    const iconMargin = margin === "lg" ? ' mr-4' : ' mr-2'
    const iconClasses = "inline relative top-[-.1rem]" + iconMargin
    return <Button className={classes} size={size} border={border}>
        <Icon width={16} height={16} className={iconClasses} />
        {content}</Button>
}