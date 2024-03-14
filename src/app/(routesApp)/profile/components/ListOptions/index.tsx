import Image from "next/image"

export const ListOptions = () =>{
    return(
        <ul className="w-full">
            <li className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image 
                        src='/icons/profile.svg'
                        height={24}
                        width={24}
                        alt="profile"
                    />
                    <p>Minha Conta</p>
                </div>
                <Image 
                    src='/icons/arrowRight.svg'
                    height={24}
                    width={24}
                    alt="profile"
                />
            </li>
        </ul>
    )
}