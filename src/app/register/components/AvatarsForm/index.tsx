import { dataAvatars } from "@/constants/avatarsData"
import Image from "next/image"

export  const AvatarsForm = () =>{
    return(
        <div className="flex flex-col items-center pt-7 gap-8">
            <Image 
                src='/avatar/avatar-profile01.svg'
                height={180}
                width={180}
                alt="avatar"
            />
            
            <div className="flex flex-wrap gap-2 w-full">
                {
                    dataAvatars.map((avatar, index)=>{
                        return (
                            <Image 
                                key={index}
                                src={`/avatar/${avatar}`}
                                height={59}
                                width={59}
                                alt="avatar"
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}