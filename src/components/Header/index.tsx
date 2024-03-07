'use client'

import Image from "next/image"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"
import { ButtonHeader } from "./components/ButtonHeader"

type HeaderProps = {
    children: ReactNode
}

export const Header = ({children}: HeaderProps) =>{
    const path = usePathname()
    
    if(path === '/' || path === '/login') return

    return(
        <header className="w-full py-3 px-[0.625rem] flex items-center justify-between">
            <ButtonHeader />
            {children}
        </header>
    )
}