"use client";
import { getItem } from "@/utils/localStorageUtils";
import { jwtDecode } from "jwt-decode";
import Image from "next/image";

interface IAvatarProps {
    userId: number;
    fullname: string;
    email: string;
    phone: string;
    user_type: string;
    avatar: string;
}
type avatarType = 'sm' | 'lg';

interface IAvatar {
    typeAvatar: avatarType;
}

export const Avatar = ({ typeAvatar }: IAvatar) => {

    const token = getItem("token") as string;
    const decoded: IAvatarProps = jwtDecode(token);
    console.log(decoded, "DECODED")
    const avatar = decoded.avatar;
    return (
        <Image
            src={`/avatar/${avatar}`}
            height={typeAvatar === 'sm' ? 32 : 248}
            width={typeAvatar === 'sm' ? 32 : 248}
            alt="avart"
        />
    )
}
