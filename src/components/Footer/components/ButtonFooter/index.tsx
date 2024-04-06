import Link from "next/link";
import { ReactNode } from "react";

type ButtonType = 'primary' | 'secondary';

type ButtonFooter = {
    children: ReactNode
    hRef: string
    name?: string
    typeButton: ButtonType
}

export const ButtonFooter = ({
    children, 
    hRef, 
    name, 
    typeButton
}: ButtonFooter) =>{
    if(typeButton === "primary"){
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
                    <p className={`text-xs font-medium`}>
                        {name}
                    </p>
                </div>
            </Link>
        )
    }

    if(typeButton === "secondary"){
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
                    justify-between
                    rounded-full
                    bg-verdeFloresta
                    p-3"
                >
                    {children}
                </div>
            </Link>
        )
    }
}