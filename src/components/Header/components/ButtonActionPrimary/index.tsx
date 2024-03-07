import Image from "next/image"
import { ButtonHTMLAttributes } from "react"

type PrimaryActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> 

export const PrimaryActionButton = ({...props}: PrimaryActionButtonProps) =>{
    return(
        <button>
            <Image 
                src='/icons/arrowLeft.svg'
                width={11}
                height={11}
                alt="seta para esquerda - voltar"
            />
        </button>
    )
}