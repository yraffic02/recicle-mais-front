'use client'
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"

export const PrimaryHeaderButton = () =>{
    const path = usePathname()
    const router = useRouter()

    const handleBack = () =>{
        router.back()
    }
    
    if(path === '/home'){
        return
    }

    return(
        <button
            onClick={handleBack}
        >
            <Image 
                src='/icons/arrowLeft.svg'
                width={11}
                height={11}
                alt="seta para esquerda - voltar"
            />
        </button>
    )
}