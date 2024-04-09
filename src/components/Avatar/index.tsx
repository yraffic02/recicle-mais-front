"use client";
import Image from "next/image";

type avatarType = 'sm' | 'lg';

interface IAvatar {
    typeAvatar: avatarType;
}

export const Avatar = ({ typeAvatar }: IAvatar) => {
    return (
        <Image
            src={`/avatar/${avatar}`}
            height={typeAvatar === 'sm' ? 32 : 248}
            width={typeAvatar === 'sm' ? 32 : 248}
            alt="avart"
        />
    )
}
