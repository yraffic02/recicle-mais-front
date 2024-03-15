import { Avatar } from "@/components/Avatar"

export const HeaderProfile = () =>{
    return(
        <div className="w-full flex items-center gap-6 pb-[5.75rem]">
            <Avatar />
            <h1 className="text-xl font-semibold">Amanda Campos</h1>
        </div>
    )
}