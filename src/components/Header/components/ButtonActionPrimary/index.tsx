'use client'
import Image from "next/image"
import { useRouter } from "next/navigation"

export const PrimaryActionButton = () =>{
    const router = useRouter()

    const handleBack = () =>{
        router.back()
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