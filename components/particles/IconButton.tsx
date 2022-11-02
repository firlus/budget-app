import { ComponentProps, ComponentType, MouseEventHandler, ReactElement } from "react";
import Button from "../abstract/Button";

interface IconButtonProps {
    className?: string,
    Icon: ComponentType<ComponentProps<'svg'>>
    border?: boolean
    size?: "sm" | "md"
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function IconButton({ className, Icon, border, onClick, size }: IconButtonProps) {
    const sizePixels = size === "sm" ? 16 : 24
    const classes = "py-2 px-2 " + className;
    return <Button className={classes} border={border} onClick={onClick}>
        <Icon width={sizePixels} height={sizePixels} />
    </Button>
}