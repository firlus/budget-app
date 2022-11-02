import { useState } from "react";

interface ColorPickerProps {
    size: number,
    className: string,
    color: string,
    onColorChange: (color: string) => void
}

export default function ColorPicker({ size, className, onColorChange, color }: ColorPickerProps) {

    const options = [
        "bg-rose-600",
        "bg-pink-600",
        "bg-fuchsia-600",
        "bg-purple-600",
        "bg-violet-600",
        "bg-indigo-600",
        "bg-sky-600",
        "bg-blue-600",
        "bg-cyan-600",
        "bg-teal-600",
        "bg-emerald-600",
        "bg-green-600",
        "bg-lime-600",
        "bg-yellow-600",
        "bg-amber-600",
        "bg-orange-600",
        "bg-red-600",
    ]

    const [isPickerOpen, setPickerOpen] = useState(false);

    return (
        <>
            <button onClick={() => setPickerOpen(!isPickerOpen)} className={`w-6 h-6 rounded-full cursor-pointer ${color} ${className}`}>
            </button>
            {isPickerOpen &&
                <div className="absolute bg-white shadow pt-4 pb-2 px-4 rounded-xl translate-y-10 flex flex-wrap">
                    {options.map(option => <div className="w-1/4 flex justify-center items-center mb-2"><button className={`w-6 h-6 rounded-full cursor-pointer ${option}`} onClick={() => {
                        setPickerOpen(false);
                        onColorChange(option);
                    }}></button></div>)}
                </div>
            }
        </>
    )

}