import Image from "next/image"
import { ButtonHTMLAttributes } from "react"

type SecondaryActionButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    srcIcon: string,   
}

export const SecondaryActionButton = ({ srcIcon, ...props}: SecondaryActionButtonProps) =>{
    return(
        <button
            {...props}
        >
            <Image 
                src={srcIcon}
                width={11}
                height={11}
                alt="seta para esquerda - voltar"
            />
        </button>
    )
}