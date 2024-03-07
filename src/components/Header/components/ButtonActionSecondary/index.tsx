import Image from "next/image"

type SecondaryActionButtonProps = {
    srcIcon: string,
    
}

export const SecondaryActionButton = () =>{
    
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