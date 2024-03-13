import { LinkButtonTypeHome } from "@/types"
import Link from "next/link"

export const LinkButtonPrimary = ({hRef, children}: LinkButtonTypeHome) =>{
    return(
        <Link
            href={hRef}
            className="
                bg-offWihte 
                p-7
                w-[9.68rem]
                rounded-tl-[1.25rem]
                rounded-tr-[1.125rem]
                rounded-br-[1.1875rem]
                rounded-bl-[0.9375rem]
                "
        >
            <div
                className="
                flex 
                flex-col 
                items-center 
                justify-between"
            >
                {children}
            </div>
        </Link>
    )
}