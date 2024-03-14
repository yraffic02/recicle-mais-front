import Image from "next/image"
import Link from "next/link"

type OptionsProps = {
    icon: string,
    name: string
}

export const Options = ({icon, name}: OptionsProps) =>{
    return(
        <li>
            <Link
                href='#'
                className="w-full flex items-center justify-between py-[1.125rem] px-2"
            >
                    <div className="flex items-center gap-2">
                        <Image 
                            src={`/icons/${icon}.svg`}
                            height={24}
                            width={24}
                            alt="profile"
                        />
                        <p>{name}</p>
                    </div>
                    <Image 
                        src='/icons/arrowRight.svg'
                        height={24}
                        width={24}
                        alt="profile"
                    />
            </Link>
        </li>
    )
}