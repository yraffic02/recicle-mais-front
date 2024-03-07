import Image from "next/image"

export const ButtonHeader = () =>{
    
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