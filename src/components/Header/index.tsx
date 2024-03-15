'use client'

import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { PrimaryActionButton } from "./components/ButtonActionPrimary"

type HeaderProps = {
    children: ReactNode
}

export const Header = ({children}: HeaderProps) =>{
    const path = usePathname()
    
    if(path === '/' || path === '/login'){
        return
    }

    return(
        <header className="w-full py-3 px-[0.625rem] flex items-center justify-between">
            {
                path !== '/home' &&
                <PrimaryActionButton />
            }
            {children}
        </header>
    )
}