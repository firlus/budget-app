import Button from "./../abstract/Button";

interface TextButtonProps {
    className?: string,
    content: string
    border?: boolean
}

export default function TextButton({ className, content, border }: TextButtonProps) {
    const classes = "py-2 px-3 " + className;
    return <Button className={classes} border={border}>{content}</Button>
}