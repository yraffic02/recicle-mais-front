import Link from "next/link"
import { ReactNode } from "react"

export type LinkButtonTypeHome = {
    hRef: string,
    name: string
}

export const LinkButtonSecondary = ({hRef, name}: LinkButtonTypeHome) =>{
    return(
        <Link href={hRef} className="w-full flex flex-col">
            <div
                className="
                    w-full
                    p-7
                    bg-verdeFloresta 
                    rounded-tl-[1.25rem]
                    rounded-tr-[1.125rem]
                    h-28    
                    "
            >
                    
            </div>
            <span 
                className="
                    text-center 
                    text-base 
                    font-medium
                    bg-white 
                    w-full 
                    rounded-br-[1.1875rem] 
                    rounded-bl-[0.9375rem] 
                    p-1
                    shadow-md"
            >
                {name}
            </span>
        </Link>
    )
}