"use client";
import Image from "next/image";

type avatarType = 'sm' | 'lg';

interface IAvatar {
    typeAvatar: avatarType;
}

export const Avatar = ({ typeAvatar }: IAvatar) => {

    const token = getItem("token") as string;
    const decoded: IAvatarProps = jwtDecode(token);
    const avatar = decoded.avatar;
    return (
        <Image
            src="/avatar/avatar-profile01.svg"
            height={typeAvatar === 'sm' ? 32 : 248}
            width={typeAvatar === 'sm' ? 32 : 248}
            alt="avart"
        />
    )
}
