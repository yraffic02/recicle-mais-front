import Image from "next/image"
import Link from "next/link"
import { ReactNode } from "react"

export type LinkButtonTypeHome = {
    hRef: string,
    name: string
}

export const LinkButtonSecondary = ({hRef, name}: LinkButtonTypeHome) =>{
    return(
        <Link href={hRef} className="w-full flex flex-col">
            <div
                className="
                    w-full
                    p-7
                    bg-verdeFloresta 
                    rounded-tl-[1.25rem]
                    rounded-tr-[1.125rem]
                    h-36   
                    relative
                    flex"
            >
                <Image 
                    src='/illustrations/Window_3.svg'
                    height={73}
                    width={131}
                    alt="imagem svg"
                    className="absolute bottom-2 left-4"
                />
                <Image 
                    src='/illustrations/Window_4.svg'
                    height={78}
                    width={102}
                    alt="imagem svg"
                    className="absolute top-1 left-28"
                />
                <Image 
                    src='/illustrations/Window_1.svg'
                    height={66}
                    width={95}
                    alt="imagem svg"
                    className="absolute bottom-1 left-44"
                />
                <Image 
                    src='/illustrations/Window_2.svg'
                    height={45}
                    width={47}
                    alt="imagem svg"
                    className="absolute top-3 right-10"
                />
                <Image 
                    src='/illustrations/Plant.svg'
                    height={70}
                    width={34}
                    alt="imagem svg"
                    className="absolute bottom-0 right-2"
                />
            </div>
            <span 
                className="
                    text-center 
                    text-base 
                    font-medium
                    bg-white 
                    w-full 
                    rounded-br-[1.1875rem] 
                    rounded-bl-[0.9375rem] 
                    p-1
                    shadow-md"
            >
                {name}
            </span>
        </Link>
    )
}