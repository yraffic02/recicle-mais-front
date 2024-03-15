import Link from "next/link"
import { ReactNode } from "react"

export type LinkButtonTypeHome = {
    hRef: string,
    children: ReactNode
}

export const LinkButtonSecondary = ({hRef, children}: LinkButtonTypeHome) =>{
    return(
        <div
            className="
                w-full
                p-7
                bg-offWihte 
                rounded-tl-[1.25rem]
                rounded-tr-[1.125rem]
                rounded-br-[1.1875rem]
                rounded-bl-[0.9375rem]
                relative 
                h-28
                "
        >
            <Link
                href={hRef}
                className="
                w-full
                flex 
                flex-col 
                items-center 
                justify-between   
                "
            >
                {children}
            </Link>
        </div>
    )
}