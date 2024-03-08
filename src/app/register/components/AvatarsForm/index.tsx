import { dataAvatars } from "@/constants/avatarsData"
import Image from "next/image"
import { useState } from "react";

export  const AvatarsForm = () => {
    const [selectedAvatar, setSelectedAvatar] = useState(dataAvatars[0]);
    
    return(
        <div className="flex flex-col items-center pt-7 gap-8">
            <Image 
                src={`/avatar/${selectedAvatar}`}
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
                                onClick={() => setSelectedAvatar(avatar)}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}