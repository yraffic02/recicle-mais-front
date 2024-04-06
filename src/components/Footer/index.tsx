'use client'
import Image from "next/image"
import { ButtonFooter } from "./components/ButtonFooter"
import { usePathname } from "next/navigation"
import { BarChartBig, Home, Plus, Search, UserCircle } from "lucide-react"

export const Footer = () =>{
    const path = usePathname()

    if(path !== '/home'){
        return
    }

    return(
        <footer className="h-[75px] w-screen px-6">
            <div className="flex items-center justify-between w-full">
                <ButtonFooter hRef="/home" name="Inicio" typeButton="primary">
                    <Home 
                        size={24} 
                        fill='green'
                    />
                </ButtonFooter>
                <ButtonFooter hRef="#" name="Pesquisar" typeButton="primary">
                    <Search 
                        size={24}
                    />
                </ButtonFooter>
                <ButtonFooter hRef="#" typeButton="secondary">
                    <Plus size={24} color="white"/>
                </ButtonFooter>
                <ButtonFooter hRef="#" name="Dados" typeButton="primary">
                    <BarChartBig size={24} />
                </ButtonFooter>
                <ButtonFooter hRef="/profile" name="Perfil" typeButton="primary">
                    <UserCircle 
                        size={24}
                    />
                </ButtonFooter>
            </div>
        </footer>
    )
}