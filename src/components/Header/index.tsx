import { ReactNode } from "react"
import { PrimaryHeaderButton } from "./components/ButtonActionPrimary"

type HeaderProps = {
    children: ReactNode
}

export const Header = ({children}: HeaderProps) =>{
    return(
        <header className="w-full py-3 px-[0.625rem] flex items-center justify-between">
            <PrimaryHeaderButton />
            {children}
        </header>
    )
} 