import Link from "next/link"
import { ReactNode } from "react"

export type LinkButtonTypeHome = {
    hRef: string,
    children: ReactNode,
    name: string
}


export const LinkButtonPrimary = ({hRef, children, name}: LinkButtonTypeHome) =>{
    return(
        <Link href={hRef}>
            <div
                className="
                flex 
                flex-col 
                items-center 
                justify-between
                bg-verdeFloresta 
                w-[9.68rem]
                h-[13rem]
                rounded-tl-[1.25rem]
                rounded-tr-[1.125rem]
                rounded-br-[1.1875rem]
                rounded-bl-[0.9375rem]"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    {children}
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
            </div>
        </Link>
    )
}