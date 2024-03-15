import Image from "next/image"

export const Avatar = ()=>{
    return(
        <Image 
            src='/avatar/avatar-profile01.svg'
            height={32}
            width={32}
            alt="avart"
        />
    )
}