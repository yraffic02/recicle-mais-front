'use client'
import Image from "next/image"
import { ButtonFooter } from "./components/ButtonFooter"
import { usePathname } from "next/navigation"

export const Footer = () =>{
    const path = usePathname()

    if(path !== '/home'){
        return
    }

    return(
        <footer className="h-[75px] w-screen px-6">
            <div className="flex items-center justify-between w-full">
                <ButtonFooter hRef="/home" name="Inicio" typeButton="primary">
                    <Image 
                        src='/icons/start.svg'
                        height={24}
                        width={24}
                        alt="inicio"
                    />
                </ButtonFooter>
                <ButtonFooter hRef="#" name="Pesquisar" typeButton="primary">
                    <Image 
                        src='/icons/search.svg'
                        height={24}
                        width={24}
                        alt="inicio"
                    />
                </ButtonFooter>
                <ButtonFooter hRef="#" typeButton="secondary">
                    <Image 
                        src='/icons/add.svg'
                        height={24}
                        width={24}
                        alt="inicio"
                    />
                </ButtonFooter>
                <ButtonFooter hRef="#" name="Dados" typeButton="primary">
                    <Image 
                        src='/icons/data.svg'
                        height={24}
                        width={24}
                        alt="inicio"
                    />
                </ButtonFooter>
                <ButtonFooter hRef="/profile" name="Perfil" typeButton="primary">
                    <Image 
                        src='/icons/profileOtlined.svg'
                        height={24}
                        width={24}
                        alt="inicio"
                    />
                </ButtonFooter>
            </div>
        </footer>
    )
}