import Image from "next/image"
import Link from "next/link"

export const Footer = () =>{
    return(
        <footer className="h-[75px]">
            <div>
                <Link
                    href='#'
                    className="
                        py-[0.4375rem]
                        rounded-tl-[1.25rem]
                        rounded-tr-[1.125rem]
                        rounded-br-[1.1875rem]
                        rounded-bl-[0.9375rem]
                        "
                >
                    <div
                        className="
                        flex 
                        flex-col 
                        items-center 
                        justify-between"
                    >
                        <Image 
                            src='/icons/start.svg'
                            height={24}
                            width={24}
                            alt="inicio"
                        />
                        <p>inicio</p>
                    </div>
                </Link>
            </div>
        </footer>
    )
}