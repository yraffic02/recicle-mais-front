import { LinkButtonTypeHome } from "@/types"
import Link from "next/link"

type ButtonFooter = LinkButtonTypeHome & {
    name?: string
}

export const ButtonFooter = ({children, hRef, name}: ButtonFooter) =>{
    return(
        <Link
            href={hRef}
            className="py-[0.4375rem]"
        >
            <div
                className="
                flex 
                flex-col 
                items-center 
                justify-between"
            >
                {children}
                <p className="text-xs font-medium">
                    {name}
                </p>
            </div>
        </Link>
    )
}